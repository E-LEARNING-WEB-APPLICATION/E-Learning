import React from "react";

const InstructorDashboardStatCards = ({ stats }) => {
  return (
    <div className="instructor-dashboard__stats-grid--8">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`instructor-dashboard__stat-card ${s.color}`}
        >
          <p className="instructor-dashboard__stat-label">
            {s.label}
          </p>
          <h2 className="instructor-dashboard__stat-value">
            {s.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default InstructorDashboardStatCards;
