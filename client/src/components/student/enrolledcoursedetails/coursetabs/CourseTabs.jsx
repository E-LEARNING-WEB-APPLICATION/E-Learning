import React, { useState } from "react";
import "./CourseTabs.css";
import CourseSummary from "../coursesummary/CourseSummary";

const CourseTabs = ({ course }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "notes", label: "Notes" },
    { id: "announcements", label: "Announcements" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div className="course-tabs-wrapper mt-3">
      {/* TAB HEADER */}
      <div className="tabs-header d-flex gap-4 position-relative">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`tab-btn ${activeTab === t.id ? "active" : ""}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}

            {/* Animated Underline */}
            {activeTab === t.id && <div className="underline"></div>}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="tab-content-area">
        <hr />
        {activeTab === "overview" && <CourseSummary course={course} />}

        {activeTab === "notes" && (
          <div className="p-4 bg-white rounded shadow-sm">
            <h5 className="fw-bold">Notes</h5>
            <p>No notes added yet.</p>
          </div>
        )}

        {activeTab === "announcements" && (
          <div className="p-4 bg-white rounded shadow-sm">
            <h5 className="fw-bold">Announcements</h5>
            <p>No announcements available.</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="p-4 bg-white rounded shadow-sm">
            <h5 className="fw-bold">Reviews</h5>
            <p>No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseTabs;
