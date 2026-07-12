import "../styles/Stats.css";

function Stats() {
  return (
    <section className="stats">
      <h2>📊 SkillSphere in Numbers</h2>

      <p className="stats-subtitle">
        Thousands of professionals and companies trust SkillSphere to connect
        talent with opportunity.
      </p>

      <div className="stats-grid">
        <div className="stat-box">
          <span>👥</span>
          <h2>10K+</h2>
          <p>Freelancers</p>
        </div>

        <div className="stat-box">
          <span>💼</span>
          <h2>5K+</h2>
          <p>Jobs Posted</p>
        </div>

        <div className="stat-box">
          <span>🏢</span>
          <h2>2K+</h2>
          <p>Companies</p>
        </div>

        <div className="stat-box">
          <span>⭐</span>
          <h2>98%</h2>
          <p>Success Rate</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;