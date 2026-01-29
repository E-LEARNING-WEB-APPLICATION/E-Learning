import React, { useState } from "react";

const InstructorDashboardReviewTable = ({ reviews }) => {
    const [sortBy, setSortBy] = useState("date");

    const sortedReviews = [...reviews].sort((a, b) => {
        if (sortBy === "date") return new Date(b.date) - new Date(a.date);
        if (sortBy === "category") return a.category.localeCompare(b.category);
        return 0;
    });
    return (
        <div className="instructor-dashboard__section-card">
            <div className="instructor-dashboard__reviews-header">
                <h3 className="instructor-dashboard__section-title">
                    Course Reviews
                </h3>
                <select
                    className="instructor-dashboard__review-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}>
                    <option value="date">Sort by Date</option>
                    <option value="category">Sort by Category</option>
                </select>
            </div>

            <table className="instructor-dashboard__reviews-table">
                <thead>
                    <tr>
                        <th>Rating</th>
                        <th>Course</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedReviews.map((r, i) => (
                        <tr key={i}>
                            <td>⭐ {r.rating}</td>
                            <td className="instructor-dashboard__course-name">
                                {r.course}
                            </td>
                            <td>{r.category}</td>
                            <td>{r.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InstructorDashboardReviewTable;
