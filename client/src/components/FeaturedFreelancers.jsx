import "../styles/FeaturedFreelancers.css";

function FeaturedFreelancers() {
  return (
    <section className="freelancers">
      <h2>⭐ Featured Freelancers</h2>

      <p className="freelancers-subtitle">
        Connect with top-rated professionals trusted by companies worldwide.
      </p>

      <div className="freelancer-grid">
        <div className="freelancer-card">
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="Rahul Sharma"
          />

          <h3>Rahul Sharma</h3>

          <p className="role">💻 Full Stack Developer</p>

          <p>⭐ 4.9 Rating</p>

          <p>📍 Hyderabad</p>

          <button>Hire Now</button>
        </div>

        <div className="freelancer-card">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Priya Patel"
          />

          <h3>Priya Patel</h3>

          <p className="role">🎨 UI/UX Designer</p>

          <p>⭐ 4.8 Rating</p>

          <p>📍 Bengaluru</p>

          <button>Hire Now</button>
        </div>

        <div className="freelancer-card">
          <img
            src="https://i.pravatar.cc/150?img=25"
            alt="Arjun Kumar"
          />

          <h3>Arjun Kumar</h3>

          <p className="role">📱 Mobile Developer</p>

          <p>⭐ 4.9 Rating</p>

          <p>📍 Chennai</p>

          <button>Hire Now</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedFreelancers;