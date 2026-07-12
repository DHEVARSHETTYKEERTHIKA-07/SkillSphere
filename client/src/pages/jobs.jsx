import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Jobs.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/jobs");
      setJobs(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load jobs");
    }
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs-container">
      <h1>💼 Browse Jobs</h1>

      <input
        type="text"
        placeholder="🔍 Search jobs..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="jobs-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="job-card" key={job._id}>
              <h2>{job.title}</h2>

              <p>
                <strong>🏢 Company:</strong> {job.company}
              </p>

              <p>
                <strong>📍 Location:</strong> {job.location}
              </p>

              <p>
                <strong>💰 Salary:</strong> {job.salary}
              </p>

              <p>
                <strong>📝 Description:</strong> {job.description}
              </p>

              <div className="job-buttons">
                <button
                  onClick={() => navigate(`/job/${job._id}`)}
                >
                  View Details
                </button>

                <button
                  onClick={() =>
                    alert("🎉 Application feature coming soon!")
                  }
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2>No Jobs Found</h2>
        )}
      </div>
    </div>
  );
}

export default Jobs;