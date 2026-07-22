import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

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
      <Link to="/" className="logo">
        🚀 <span>SkillSphere</span>
      </Link>

      <ul className="nav-links">
        <li>
          <Link
            className={location.pathname === "/" ? "active" : ""}
            to="/"
          >
            Home
          </Link>
        </li>

        {token && (
          <>
            <li>
              <Link
                className={location.pathname === "/jobs" ? "active" : ""}
                to="/jobs"
              >
                Jobs
              </Link>
            </li>

            <li>
              <Link
                className={location.pathname === "/dashboard" ? "active" : ""}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                className={location.pathname === "/profile" ? "active" : ""}
                to="/profile"
              >
                Profile
              </Link>
            </li>
          </>
        )}

        {!token ? (
          <>
            <li>
              <Link
                className={location.pathname === "/login" ? "active" : ""}
                to="/login"
              >
                Login
              </Link>
            </li>

            <li>
              <Link className="register-btn" to="/register">
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="welcome-user">
              <img
                src={
                  user?.image ||
                  "https://i.pravatar.cc/150?img=15"
                }
                alt="Profile"
                className="nav-profile"
              />

              <span>
                Hi, <strong>{user?.name}</strong>
              </span>
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