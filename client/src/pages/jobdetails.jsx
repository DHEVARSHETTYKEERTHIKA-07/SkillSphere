import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/JobDetails.css";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const res = await axios.get(
        `https://skillsphere-production-f35e.up.railway.app/api/jobs/${id}`
      );

      setJob(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load job");
    }
  };

  // Apply for Job
  const handleApply = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.post(
        "https://skillsphere-production-f35e.up.railway.app/api/applications",
        {
          user: user._id || user.id,
          job: job._id,
        }
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Application Failed");
    }
  };

  // Save Job
  const handleSaveJob = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.post(
        "https://skillsphere-production-f35e.up.railway.app/api/saved-jobs",
        {
          user: user._id || user.id,
          job: job._id,
        }
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed to Save Job");
    }
  };

  if (!job) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <h1>{job.title}</h1>

        <h3>🏢 {job.company}</h3>

        <p>
          <strong>📍 Location:</strong> {job.location}
        </p>

        <p>
          <strong>💰 Salary:</strong> {job.salary}
        </p>

        <p>
          <strong>📝 Description:</strong>
        </p>

        <p>{job.description}</p>

        <div className="job-buttons">
          <button onClick={handleApply}>
            Apply Now
          </button>

          <button onClick={handleSaveJob}>
            ❤️ Save Job
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;