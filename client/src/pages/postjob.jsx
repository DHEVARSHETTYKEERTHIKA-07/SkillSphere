import { useState } from "react";
import axios from "axios";
import "../styles/PostJob.css";

function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/jobs",
        formData
      );

      alert(res.data.message);

      setFormData({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
      });

    } catch (error) {
      alert(error.response?.data?.message || "Failed to post job");
    }
  };

  return (
    <div className="post-job-container">
      <div className="post-job-card">
        <h1>📢 Post a New Job</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />

          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Job Description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Post Job
          </button>

        </form>
      </div>
    </div>
  );
}

export default PostJob;