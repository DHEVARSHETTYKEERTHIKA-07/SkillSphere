import { useNavigate } from "react-router-dom";
import "../styles/CTA.css";

function CTA() {
  const navigate = useNavigate();

  return (
    <section className="cta">
      <div className="cta-content">
        <h2>🚀 Ready to Build Your Career?</h2>

        <p>
          Whether you're looking for your dream job or searching for talented
          professionals, SkillSphere is the perfect place to start.
        </p>

        <div className="cta-buttons">
          <button
            className="cta-primary"
            onClick={() => navigate("/register")}
          >
            Join SkillSphere
          </button>

          <button
            className="cta-secondary"
            onClick={() => navigate("/jobs")}
          >
            Browse Jobs
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;