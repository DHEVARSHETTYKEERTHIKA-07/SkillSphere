import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";
import heroImage from "../assets/hero-illustration.svg";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-badge">
          🚀 Trusted by 10,000+ Job Seekers
        </span>

        <h1>
          Find Your <span>Dream Career</span>
          <br />
          with SkillSphere
        </h1>

        <p>
          Discover internships, freelance projects, and full-time
          opportunities from top companies. Start your career journey with
          SkillSphere and connect with employers across India.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/jobs")}
          >
            Explore Jobs
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/register")}
          >
            Get Started
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

      <div className="hero-right">
        <img
          src={heroImage}
          alt="Job Search Illustration"
        />
      </div>
    </section>
  );
}

export default Hero;