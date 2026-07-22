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

        <div className="dashboard-header">
          <h1>👋 Welcome back, {user?.name || "User"}!</h1>

          <p>
            Ready to take the next step in your career?
            Explore jobs, manage applications, and build your future with SkillSphere.
          </p>
        </div>

        {/* Dashboard Cards */}

        <div className="stats-grid">

          <div
            className="stat-card"
            onClick={() => navigate("/jobs")}
          >
            <h2>💼</h2>
            <h3>Browse Jobs</h3>
            <p>Find your dream job.</p>
          </div>

          <div
            className="stat-card"
            onClick={() => navigate("/applications")}
          >
            <h2>📄</h2>
            <h3>Applications</h3>
            <p>Track your applications.</p>
          </div>

          <div
            className="stat-card"
            onClick={() => navigate("/saved-jobs")}
          >
            <h2>❤️</h2>
            <h3>Saved Jobs</h3>
            <p>View your favourites.</p>
          </div>

          <div
            className="stat-card"
            onClick={() => navigate("/profile")}
          >
            <h2>👤</h2>
            <h3>My Profile</h3>
            <p>Manage your profile.</p>
          </div>

        </div>

        {/* Recent Activity */}

        <div className="recent-activity">

          <h2>📈 Recent Activity</h2>

          <ul>
            <li>✅ Welcome to SkillSphere.</li>
            <li>💼 Explore the latest job opportunities.</li>
            <li>📄 Track all your applications.</li>
            <li>👤 Update your profile anytime.</li>
          </ul>

        </div>

        <h2 className="quick-title">
          Quick Actions
        </h2>

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

          <button onClick={() => navigate("/profile")}>
            👤 My Profile
          </button>

          <button onClick={() => navigate("/admin")}>
            🛠 Admin Panel
          </button>

          <button
            className="logout"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;