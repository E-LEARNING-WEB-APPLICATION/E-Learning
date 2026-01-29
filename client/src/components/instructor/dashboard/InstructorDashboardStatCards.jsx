import React from "react";
import { motion as Motion } from "framer-motion";


const InstructorDashboardStatCards = ({ stats }) => {
    return (
        <div className="instructor-dashboard__stats-grid--8">
            {stats.map((s, i) => (
                <Motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`instructor-dashboard__stat-card ${s.color}`}>
                    <p className="instructor-dashboard__stat-label">
                        {s.label}
                    </p>
                    <h2 className="instructor-dashboard__stat-value">
                        {s.value}
                    </h2>
                </Motion.div>
            ))}
        </div>
    );
};

export default InstructorDashboardStatCards;
