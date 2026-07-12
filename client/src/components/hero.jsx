import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Find Your <span>Dream Job</span> Today 🚀
        </h1>

        <p>
          Connect with top companies, discover exciting career opportunities,
          and build your future with SkillSphere.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/jobs")}
          >
            💼 Browse Jobs
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/register")}
          >
            🚀 Get Started
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h2>5000+</h2>
            <p>Jobs</p>
          </div>

          <div>
            <h2>1200+</h2>
            <p>Companies</p>
          </div>

          <div>
            <h2>10K+</h2>
            <p>Users</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;