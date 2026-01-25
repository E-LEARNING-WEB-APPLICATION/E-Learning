import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetWishlist } from "@/slices/wishlist/wishlistSlice";
import "./StudentNavbar.css";
import { toast } from "react-toastify";

function StudentNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistCount = useSelector((state) => state.wishlist.value.count);

  const handleLogout = () => {
    // Clear Redux state
    dispatch(resetWishlist());

    // Clear auth data
    localStorage.removeItem("token");

    // Show feedback
    toast.success("Logged out successfully", {
      position: "top-right",
      autoClose: 1500,
      pauseOnHover: false,
      closeOnClick: true,
    });

    // Redirect immediately
    navigate("/guest/login", { replace: true });
  };

  return (
    <nav
      className="navbar navbar-expand-lg student-navbar"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        {/* Brand */}
        <NavLink to="/student/dashboard" className="student-brand">
          <i className="bi bi-mortarboard-fill me-2"></i>
          <span className="brand-text">E-Learning</span>
        </NavLink>

        {/* Toggle */}
        <button
          className="navbar-toggler student-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#studentNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="studentNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 student-links">
            {/* Dashboard */}
            <li className="nav-item" style={{ marginLeft: "7px" }}>
              <NavLink
                to="/student/dashboard"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "7px" }}>
              <NavLink
                to="/student/mycourses"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                MyCourses
              </NavLink>
            </li>

            <li
              className="nav-item position-relative"
              style={{ marginLeft: "7px" }}
            >
              <NavLink
                to="/student/wishlist"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active-link d-flex align-items-center gap-1"
                    : "nav-link d-flex align-items-center gap-1"
                }
              >
                Wishlist
                {wishlistCount > 0 && (
                  <span className="wishlist-badge">{wishlistCount}</span>
                )}
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "7px" }}>
              <NavLink
                to="/student/notification"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Notifications
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "7px" }}>
              <NavLink
                to="/student/profile"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Profile
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "7px" }}>
              <NavLink
                to="/student/aboutus"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "7px" }}>
              <NavLink
                to="/student/contactus"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "7px" }}>
              <NavLink onClick={handleLogout} className="nav-link logout-btn">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default StudentNavbar;
