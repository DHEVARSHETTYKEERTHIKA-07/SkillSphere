import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        "https://skillsphere-production-f35e.up.railway.app/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert(res.data.message);

      setFormData({
        email: "",
        password: "",
      });

      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-container">

      <div className="login-left">

        <h1>Welcome Back 👋</h1>

        <p>
          Login to SkillSphere and discover thousands of jobs from
          top companies.
        </p>

        <img
          src="https://undraw.co/api/illustrations/4d56a490-7fb5-470f-a01d-61d6df8f61c4"
          alt="Login"
        />

      </div>

      <div className="login-card">

        <h2>Login</h2>

        <p>
          Continue your career journey
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="📧 Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="🔒 Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-link">
          Don't have an account?{" "}
          <Link to="/register">
            Register Now
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;