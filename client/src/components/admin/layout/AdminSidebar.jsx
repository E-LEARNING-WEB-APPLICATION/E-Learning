import { useState } from "react";
import {
  FaTachometerAlt,
  FaBook,
  FaUsers,
  FaChartPie,
  FaCog,
  FaBars,
} from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import "./layout.css";
import { Link } from "react-router-dom";

const Sidebar = ({ onToggle }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    const newState = !collapsed;
    setCollapsed(newState);

    // Inform parent layout (DashboardLayout)
    if (onToggle) onToggle(newState);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <h4 className="logo">{collapsed ? "EL" : "E-Learning"}</h4>
        <FaBars size={20} className="toggle-btn" onClick={toggleSidebar} />
      </div>

      <ul className="sidebar-menu list-unstyled mt-3">
        <Link className="menu-item active" to="/admin/dashboard">
          <FaTachometerAlt className="icon" />
          {!collapsed && <span>Dashboard</span>}
        </Link>

        <Link className="menu-item" to="/admin/courses">
          <FaBook className="icon" />
          {!collapsed && <span>Courses</span>}
        </Link>

        <Link className="menu-item" to="/admin/instructors">
          <FaUsers className="icon" />
          {!collapsed && <span>Instructors</span>}
        </Link>

        <Link className="menu-item" to="/admin/analytics">
          <FaChartPie className="icon" />
          {!collapsed && <span>Analytics</span>}
        </Link>

        <Link className="menu-item" to="/admin/notifications">
          <IoMdNotifications className="icon" />
          {!collapsed && <span>Notifications</span>}
        </Link>

        <Link className="menu-item" to="/admin/settings">
          <FaCog className="icon" />
          {!collapsed && <span>Settings</span>}
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
