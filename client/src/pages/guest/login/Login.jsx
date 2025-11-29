import React, { useState } from "react";
import "./Login.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //e -> it’s a synthetic event object that React creates to wrap the native browser event.
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(JSON.stringify(formData));
    console.log(formData);
  };

  return (
    <div className="outer-container">
      <div className="p-4 p-md-5 inner-container">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#214979ff" }}>
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              required
            />
            <label>
              <FaEnvelope className="me-2" /> Email
            </label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control label"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              required
            />
            <label>
              <FaLock className="me-2" /> Password
            </label>
          </div>
          <button type="submit" className="button-style fw-semibold w-100 ">
            Login
          </button>
          <p className="text-center mt-4">
            Don't have an account.?{" "}
            <button
              type="submit"
              className="text-decoration-underline fw-semibold btn btn-link"
              style={{ color: "#112d4e" }}
              onClick={() => {
                navigate("/guest/student-registration");
              }}
            >
              Register here
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
