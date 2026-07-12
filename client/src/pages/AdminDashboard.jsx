import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <div className="admin-card">
        <h1>🛠 Admin Dashboard</h1>

        <p>Manage SkillSphere from one place.</p>

        <div className="admin-buttons">
          <button onClick={() => navigate("/admin/jobs")}>
            💼 Manage Jobs
          </button>

          <button onClick={() => navigate("/admin/users")}>
            👥 Manage Users
          </button>

          <button onClick={() => navigate("/admin/applications")}>
            📄 Manage Applications
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;