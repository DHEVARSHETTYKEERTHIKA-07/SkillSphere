import "../styles/Categories.css";

function Categories() {
  return (
    <section className="categories">
      <h2>🚀 Explore Popular Categories</h2>

      <p className="categories-subtitle">
        Discover opportunities across the most in-demand career fields.
      </p>

      <div className="category-grid">
        <div className="card">
          <span className="icon">💻</span>
          <h3>Web Development</h3>
          <p>Build modern websites using React, Node.js and the MERN stack.</p>
        </div>

        <div className="card">
          <span className="icon">🎨</span>
          <h3>UI/UX Design</h3>
          <p>Create beautiful user experiences and stunning interfaces.</p>
        </div>

        <div className="card">
          <span className="icon">📱</span>
          <h3>Mobile Development</h3>
          <p>Develop Android and iOS apps with modern technologies.</p>
        </div>

        <div className="card">
          <span className="icon">🤖</span>
          <h3>AI & Machine Learning</h3>
          <p>Work on intelligent systems, automation and data-driven solutions.</p>
        </div>

        <div className="card">
          <span className="icon">☁️</span>
          <h3>Cloud Computing</h3>
          <p>Deploy scalable applications using AWS, Azure and Google Cloud.</p>
        </div>

        <div className="card">
          <span className="icon">📊</span>
          <h3>Data Science</h3>
          <p>Analyze data, build predictive models and generate insights.</p>
        </div>
      </div>
    </section>
  );
}

export default Categories;