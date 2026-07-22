import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Jobs.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://skillsphere-production-f35e.up.railway.app/api/jobs"
      );

      setJobs(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs-container">
      <h1>💼 Discover Your Next Opportunity</h1>

      <input
        type="text"
        placeholder="🔍 Search by job title..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <h2 className="loading-text">⏳ Loading jobs...</h2>
      ) : (
        <div className="jobs-grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div className="job-card" key={job._id}>
                <h2>💼 {job.title}</h2>

                <p>
                  <strong>🏢 {job.company}</strong>
                </p>

                <p>📍 {job.location}</p>

                <p>💰 {job.salary}</p>

                <p>
                  <strong>About the Role</strong>
                </p>

                <p>{job.description}</p>

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
            <h2 className="no-jobs">
              😔 No jobs found. Try another search.
            </h2>
          )}
        </div>
      )}
    </div>
  );
}

export default Jobs;