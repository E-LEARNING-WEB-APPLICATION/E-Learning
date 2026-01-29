import React from "react";

export default function InstructorDashboardHeader({ name }) {
    return (
        <div className="instructor-dashboard__header">
            <h1 className="instructor-dashboard__header-name">
                Welcome back, {name}
            </h1>
            <p className="instructor-dashboard__header-title">
                Here’s an overview of your teaching activity
            </p>
        </div>
    );
}
