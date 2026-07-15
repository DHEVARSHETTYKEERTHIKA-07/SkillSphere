import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminJobs.css";

function AdminJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(
  "https://skillsphere-production-f35e.up.railway.app/api/jobs"
);
      setJobs(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load jobs");
    }
  };

  const deleteJob = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
  `https://skillsphere-production-f35e.up.railway.app/api/jobs/${id}`
);

      alert("Job Deleted Successfully");

      fetchJobs();
    } catch (error) {
      console.log(error);
      alert("Failed to delete job");
    }
  };

  return (
    <div className="admin-jobs">
      <h1>💼 Manage Jobs</h1>

      <div className="admin-job-grid">
        {jobs.map((job) => (
          <div className="admin-job-card" key={job._id}>
            <h2>{job.title}</h2>

            <p>
              <strong>Company:</strong> {job.company}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <button
              className="delete-btn"
              onClick={() => deleteJob(job._id)}
            >
              🗑 Delete Job
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminJobs;