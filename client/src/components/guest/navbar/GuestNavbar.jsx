import React from "react";
import { NavLink } from "react-router-dom";
import "../../student/navbar/StudentNavbar.css";

const GuestNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg student-navbar"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        {/* Brand */}
        <NavLink to="/guest" className="student-brand">
          <i className="bi bi-mortarboard-fill me-2"></i>
          <span className="brand-text">E-Learning</span>
        </NavLink>

        {/* Toggle */}
        <button
          className="navbar-toggler student-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#guestNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="guestNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 student-links">
            <li className="nav-item" style={{ marginLeft: "10px" }}>
              <NavLink
                to="/guest/instructor-registration"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Instructor Registration
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "10px" }}>
              <NavLink
                to="/guest/student-registration"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Student Registration
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "10px" }}>
              <NavLink
                to="/guest/login"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginLeft: "10px" }}>
              <NavLink
                to="/guest/aboutus"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginLeft: "10px" }}>
              <NavLink
                to="/guest/contactus"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default GuestNavbar;
