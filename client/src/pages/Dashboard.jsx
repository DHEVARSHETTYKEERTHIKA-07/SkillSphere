import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/");
    window.location.reload();
  };

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h1>👋 Welcome, {user?.name || "User"}!</h1>

        <p>Build your freelancing career with SkillSphere 🚀</p>

        {/* Quick Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <h2>💼</h2>
            <h3>Jobs</h3>
            <p>Explore Opportunities</p>
          </div>

          <div className="stat-card">
            <h2>📄</h2>
            <h3>Applications</h3>
            <p>Track Your Progress</p>
          </div>

          <div className="stat-card">
            <h2>❤️</h2>
            <h3>Saved Jobs</h3>
            <p>Your Favorites</p>
          </div>

          <div className="stat-card">
            <h2>👤</h2>
            <h3>Profile</h3>
            <p>Manage Account</p>
          </div>
        </div>

        <div className="dashboard-buttons">
          <button onClick={() => navigate("/jobs")}>
            💼 Browse Jobs
          </button>

          <button onClick={() => navigate("/post-job")}>
            ➕ Post Job
          </button>

          <button onClick={() => navigate("/applications")}>
            📄 My Applications
          </button>

          <button onClick={() => navigate("/saved-jobs")}>
            ❤️ Saved Jobs
          </button>

          <button onClick={() => navigate("/admin")}>
            🛠 Admin Panel
          </button>

          <button onClick={() => navigate("/profile")}>
            👤 My Profile
          </button>

          <button onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;