import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h2>🚀 SkillSphere</h2>

        <p>
          Connecting talented professionals with exciting career opportunities.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/jobs">Jobs</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>

        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <p className="copyright">
          © 2026 SkillSphere. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;