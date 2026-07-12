import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>💬 What Our Users Say</h2>

      <p className="testimonial-subtitle">
        Trusted by freelancers and companies across India.
      </p>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          <p>
            "SkillSphere helped me land my first freelance web development
            project within a week!"
          </p>

          <h3>⭐⭐⭐⭐⭐</h3>

          <h4>Rahul Sharma</h4>

          <span>Frontend Developer</span>
        </div>

        <div className="testimonial-card">
          <p>
            "Posting jobs is simple and I found excellent candidates quickly."
          </p>

          <h3>⭐⭐⭐⭐⭐</h3>

          <h4>Priya Patel</h4>

          <span>HR Manager</span>
        </div>

        <div className="testimonial-card">
          <p>
            "A clean interface with plenty of opportunities for freshers and
            experienced professionals."
          </p>

          <h3>⭐⭐⭐⭐⭐</h3>

          <h4>Arjun Kumar</h4>

          <span>Mobile Developer</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;