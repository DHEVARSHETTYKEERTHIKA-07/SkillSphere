import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminApplications.css";

function AdminApplications() {
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
    <div className="admin-applications">
      <h1>📄 Manage Applications</h1>

      <div className="applications-grid">
        {applications.length > 0 ? (
          applications.map((application) => (
            <div className="application-card" key={application._id}>
              <h2>
                {application.job?.title || "Job"}
              </h2>

              <p>
                <strong>Applicant:</strong>{" "}
                {application.user?.name}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {application.user?.email}
              </p>

              <p>
                <strong>Company:</strong>{" "}
                {application.job?.company}
              </p>
            </div>
          ))
        ) : (
          <h2>No Applications Found</h2>
        )}
      </div>
    </div>
  );
}

export default AdminApplications;