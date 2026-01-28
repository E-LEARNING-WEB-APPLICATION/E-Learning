import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./InstructorNavbar.css";

function InstructorNavbar() {
  return (
    <nav
      className="navbar navbar-expand-lg instructor-navbar"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        {/* Brand */}
        <Link to="/instructor/dashboard" className="instructor-brand">
          <i className="bi bi-easel-fill me-2"></i>
          <span className="brand-text">E-Learning</span>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler instructor-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#instructorNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="instructorNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 instructor-links">
            <li className="nav-item" style={{ marginLeft: "7px" }}>
              <NavLink
                to="/instructor/dashboard"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "7px" }}>
              <NavLink
                to="/instructor/addCourse"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Add Course
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "7px" }}>
              <NavLink
                to="/instructor/addedCourses/"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                My Courses
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "7px" }}>
              <NavLink
                to="/instructor/profile"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginLeft: "7px" }}>
              <NavLink
                to="/instructor/aboutus"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                AboutUs
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "7px" }}>
              <NavLink to="/guest/login" className="nav-link logout-btn">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default InstructorNavbar;
