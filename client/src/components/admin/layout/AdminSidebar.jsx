import { useState } from "react";
import {
  FaTachometerAlt,
  FaBook,
  FaUsers,
  FaChartPie,
  FaCog,
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaUserCircle,
} from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import "./layout.css";

const Sidebar = ({ onToggle }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Submenus open/close
  const [openCourses, setOpenCourses] = useState(false);
  const [openInstructors, setOpenInstructors] = useState(false);

  // Profile popup
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);


  const location = useLocation();

  const toggleSidebar = () => {
    const newState = !collapsed;
    setCollapsed(newState);

    if (onToggle) onToggle(newState);
  };

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Header */}
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <h4 className="logo">{collapsed ? "EL" : "E-Learning"}</h4>
        <FaBars size={20} className="toggle-btn" onClick={toggleSidebar} />
      </div>

      {/* MENU */}
      <ul className="sidebar-menu list-unstyled mt-3">
        {/* Dashboard */}
        <Link
          className={`menu-item ${
            isActive("/admin/dashboard") ? "active" : ""
          }`}
          to="/admin/dashboard"
        >
          <FaTachometerAlt className="icon" />
          {!collapsed && <span>Dashboard</span>}
        </Link>

        {/* COURSES DROPDOWN */}
        <div
          className={`menu-item dropdown ${
            isActive("/admin/courses") ? "active" : ""
          }`}
          onClick={() => setOpenCourses(!openCourses)}
        >
          <FaBook className="icon" />
          {!collapsed && (
            <>
              <span>Courses</span>
              {openCourses ? <FaChevronDown /> : <FaChevronRight />}
            </>
          )}
        </div>

        {!collapsed && openCourses && (
          <div className="submenu">
            <Link className="submenu-item" to="/admin/courses">
              All Courses
            </Link>

            <Link className="submenu-item" to="/admin/course-categories">
              Course Categories
            </Link>
          </div>
        )}

        {/* INSTRUCTORS DROPDOWN */}
        <div
          className={`menu-item dropdown ${
            isActive("/admin/instructors") ? "active" : ""
          }`}
          onClick={() => setOpenInstructors(!openInstructors)}
        >
          <FaUsers className="icon" />
          {!collapsed && (
            <>
              <span>Instructors</span>
              {openInstructors ? <FaChevronDown /> : <FaChevronRight />}
            </>
          )}
        </div>

        {!collapsed && openInstructors && (
          <div className="submenu">
            <Link className="submenu-item" to="/admin/instructors">
              All Instructors
            </Link>

            <Link className="submenu-item" to="/admin/instructor-requests">
              New Instructor Requests
            </Link>
          </div>
        )}

        {/* Analytics */}
        <Link
          className={`menu-item ${
            isActive("/admin/analytics") ? "active" : ""
          }`}
          to="/admin/analytics"
        >
          <FaChartPie className="icon" />
          {!collapsed && <span>Analytics</span>}
        </Link>

        {/* Notifications */}
        <Link
          className={`menu-item ${
            isActive("/admin/notifications") ? "active" : ""
          }`}
          to="/admin/notifications"
        >
          <IoMdNotifications className="icon" />
          {!collapsed && <span>Notifications</span>}
        </Link>

        {/* Settings */}
        <Link
          className={`menu-item ${isActive("/admin/settings") ? "active" : ""}`}
          to="/admin/settings"
        >
          <FaCog className="icon" />
          {!collapsed && <span>Settings</span>}
        </Link>
      </ul>

      {/* Bottom Profile Section */}
      <div className="sidebar-profile">
        <div
          className="profile-icon-wrapper"
          onClick={() => setShowProfile((prev) => !prev)}
        >
          <FaUserCircle size={28} color="#fff" /> 
        </div><strong>Admin</strong>

        {showProfile && (
          <div className="profile-popup">
            <div className="item">
              <strong>Admin</strong>
              <br />
              <span style={{ fontSize: "12px", color: "#555" }}>
                admin@example.com
              </span>
            </div>
            <div className="item">View Profile</div>
            <div className="item" style={{ color: "red" }}>
              Logout
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Sidebar;
