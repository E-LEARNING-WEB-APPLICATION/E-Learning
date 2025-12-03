import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Sidebar from "./AdminSidebar";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`admin-layout ${collapsed ? "collapsed" : ""}`}>
      <Sidebar onToggle={(c) => setCollapsed(c)} />

      <div className="main-content">
        {/* <AdminNavbar /> */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
