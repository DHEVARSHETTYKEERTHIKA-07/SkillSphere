import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/SavedJobs.css";

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    fetchSavedJobs();
  }, []);

  const fetchSavedJobs = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/saved-jobs"
      );

      setSavedJobs(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load saved jobs");
    }
  };

  return (
    <div className="saved-container">
      <h1>❤️ Saved Jobs</h1>

      {savedJobs.length > 0 ? (
        <div className="saved-grid">
          {savedJobs.map((item) => (
            <div className="saved-card" key={item._id}>
              <h2>{item.job.title}</h2>

              <p>
                <strong>🏢 Company:</strong> {item.job.company}
              </p>

              <p>
                <strong>📍 Location:</strong> {item.job.location}
              </p>

              <p>
                <strong>💰 Salary:</strong> {item.job.salary}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <h2>No Saved Jobs</h2>
      )}
    </div>
  );
}

export default SavedJobs;