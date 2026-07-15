import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/MyApplications.css";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(
        "https://skillsphere-production-f35e.up.railway.app/api/applications"
      );

      setApplications(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load applications");
    }
  };

  return (
    <div className="applications-container">
      <h1>📄 My Applications</h1>

      {applications.length > 0 ? (
        <div className="applications-grid">
          {applications.map((application) => (
            <div
              className="application-card"
              key={application._id}
            >
              <h2>{application.job.title}</h2>

              <p>
                <strong>🏢 Company:</strong>{" "}
                {application.job.company}
              </p>

              <p>
                <strong>📍 Location:</strong>{" "}
                {application.job.location}
              </p>

              <p>
                <strong>✅ Status:</strong>{" "}
                {application.status}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <h2>No Applications Found</h2>
      )}
    </div>
  );
}

export default MyApplications;