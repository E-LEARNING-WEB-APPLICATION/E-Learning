import React, { useEffect, useState } from "react";
import StudentCourseCard from "./StudentCourseCard";

export function StudentDashboardCategoryCourse({
    categories = [],
    courses = [],
}) {
    // Take only first 4 categories
    const limitedCategories = categories.slice(0, 4);

    // Active category tab
    const [activeTab, setActiveTab] = useState(null);

    // Set first category as active once categories arrive
    useEffect(() => {
        if (!activeTab && limitedCategories.length > 0) {
            setActiveTab(limitedCategories[0].id);
        }
    }, [limitedCategories, activeTab]);

    // Filter courses by selected category
    const filteredCourses = activeTab
        ? courses.filter((course) => course.categoryId === activeTab)
        : [];

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

                {/* Category Tabs */}
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

                {/* Courses Grid */}
                <div className="row g-4">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.slice(0, 4).map((course) => (
                            <StudentCourseCard
                                key={course.id}
                                course={course}
                            />
                        ))
                    ) : (
                        <p className="text-center text-muted">
                            No courses found.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default StudentDashboardCategoryCourse;
