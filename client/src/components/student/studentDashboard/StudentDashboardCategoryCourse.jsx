import React, { useState } from "react";
import StudentCourseCard from "./StudentCourseCard";

export function StudentDashboardCategoryCourse({
    categories = [],
    courses = [],
}) {

    const normalize = (str) => String(str).toLowerCase().replace(/\s+/g, "-");

    // Only first 4 categories
    const limitedCategories = categories.slice(0, 4);

    const [activeTab, setActiveTab] = useState(limitedCategories[0].id);

    return (
        <section className="py-5 bg-light">
            <div className="container">
                {/* Heading */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Browse Courses by Category</h2>
                    <p className="text-muted">
                        Explore popular courses across different domains
                    </p>
                </div>

                {/* Tabs */}
                <ul className="nav nav-tabs justify-content-center mb-4">
                    {limitedCategories.map((cat) => (
                        <li
                            className="nav-item"
                            key={cat.id}>
                            <button
                                className={`nav-link ${
                                    activeTab === cat.id ? "active" : ""
                                }`}
                                onClick={() => setActiveTab(cat.id)}>
                                {cat.title}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Course Grid */}
                <div className="row g-4">
                    {courses
                        .filter(
                            (course) =>
                                normalize(course.category) ===
                                normalize(activeTab)
                        )
                        .slice(0, 4)
                        .map((course) => (
                            <StudentCourseCard course={course}/>
                        ))}
                </div>

                {/* No Courses */}
                {courses.filter(
                    (course) =>
                        normalize(course.category) === normalize(activeTab)
                ).length === 0 && (
                    <p className="text-center text-muted mt-4">
                        No courses found.
                    </p>
                )}
            </div>
        </section>
    );
}

export default StudentDashboardCategoryCourse;
