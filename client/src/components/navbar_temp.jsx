import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h2 className="logo">🚀 SkillSphere</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        {token && (
          <>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>

            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}

        {!token ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li className="welcome-user">
              👋 {user?.name}
            </li>

            <li>
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;