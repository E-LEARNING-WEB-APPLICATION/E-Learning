import { registerInstructor } from "@/services/authService";
import React, { useState } from "react";
import {
  FaBriefcase,
  FaEnvelope,
  FaGraduationCap,
  FaLock,
  FaPhone,
  FaUser,
  FaUserEdit,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const InstructorRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
    experience: "",
    bio: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.warning("Password and Confirm Password did not match!!");
      return;
    }
    console.log(formData);

    const response = await registerInstructor(formData);
    if (response.success) {
      toast.success(response.message);
      setTimeout(() => {
        navigate("/guest/login");
      }, 1000);
    } else {
      toast.error(response.message);
    }
    console.log(response);
  };

  return (
    <div className="reg-outer-container d-flex justify-content-center align-content-center">
      <div className="reg-inner-container p-4 p-md-5">
        <h2
          className="reg-title text-center mb-4"
          style={{ color: "#214979ff" }}
        >
          Instructor Registration
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="name-row row g-3 mb-3">
            <div className="col-md-6 form-floating">
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="First Name"
                onChange={handleChange}
                required
              />
              <label>
                <FaUser className="me-2" style={{ marginLeft: "10px" }} />
                First Name
              </label>
            </div>

            <div className="col-md-6 form-floating">
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                required
              />
              <label>
                <FaUser className="me-2" style={{ marginLeft: "10px" }} />
                Last Name
              </label>
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <label>
              <FaEnvelope className="me-2" />
              Email
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <label>
              <FaLock className="me-2" />
              Password
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
            <label>
              <FaLock className="me-2" />
              Confirm Password
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="tel"
              className="form-control"
              id="phoneNo"
              placeholder="phoneNo Number"
              onChange={handleChange}
              required
            />
            <label>
              <FaPhone className="me-2" />
              phoneNo Number
            </label>
          </div>
          <div className="form-floating mb-3">
            <select
              className="form-select"
              id="experience"
              onChange={handleChange}
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select experience level
              </option>
              <option value="0-1">0-1 years</option>
              <option value="2-3">2-3 years</option>
              <option value="4-5">4-5 years</option>
              <option value="5+">5+ years</option>
            </select>
            <label>
              <FaBriefcase className="me-2" /> Years of Experience
            </label>
          </div>

          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Tell us something about yourself"
              onChange={handleChange}
              id="bio"
              style={{ height: "120px", resize: "none" }}
              required
            ></textarea>
            <label>
              <FaUserEdit className="me-2" /> Short Bio
            </label>
          </div>
          <button type="submit" className="reg-button w-100 mb-3">
            Register
          </button>
          <p className="text-center" style={{ color: "black" }}>
            Don't have an account.?{" "}
            <button
              type="submit"
              className="text-decoration-underline fw-semibold btn btn-link"
              style={{ color: "#112d4e" }}
              onClick={() => {
                navigate("/guest/login");
              }}
            >
              Login here
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default InstructorRegistration;
