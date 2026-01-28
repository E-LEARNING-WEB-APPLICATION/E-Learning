import React, { useState } from "react";
import { FaUserCog, FaPercentage } from "react-icons/fa";
import "./AdminSettings.css";
import { AdminProfileTab } from "@/components/admin/settings/AdminProfileTab";
import { PlatformConfigTab } from "@/components/admin/settings/PlatformConfigTab";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="admin-settings container-fluid py-4">
      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold">Settings</h3>
        <p className="text-muted mb-0">
          Manage your profile and platform configuration
        </p>
      </div>

      {/* Tabs */}
      <div className="settings-tabs mb-4">
        <button
          className={`tab-btn ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          <FaUserCog className="me-2" />
          Admin Profile
        </button>

        <button
          className={`tab-btn ${activeTab === "platform" ? "active" : ""}`}
          onClick={() => setActiveTab("platform")}
        >
          <FaPercentage className="me-2" />
          Platform Configuration
        </button>
      </div>

      {activeTab === "profile" && <AdminProfileTab />}
      {activeTab === "platform" && <PlatformConfigTab />}
    </div>
  );
};

export default AdminSettings;
