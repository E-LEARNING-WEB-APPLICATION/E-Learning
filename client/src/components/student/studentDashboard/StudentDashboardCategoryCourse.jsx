import React, { useState } from "react";

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
                            <div
                                className="col-md-3"
                                key={course.id}>
                                <div className="card shadow-sm h-100">
                                    {/* Image */}
                                    <img
                                        src={course.thumbnail}
                                        onError={(e) =>
                                            (e.target.src =
                                                "https://picsum.photos/seed/fallback/300/200")
                                        }
                                        className="card-img-top rounded-top"
                                        alt={course.title}
                                        style={{
                                            height: "150px",
                                            objectFit: "cover",
                                        }}
                                    />

                                    <div className="card-body">
                                        <h5 className="fw-bold">
                                            {course.title}
                                        </h5>

                                        <p className="text-muted small mb-1">
                                            {course.duration}
                                        </p>

                                        <p className="text-warning mb-2">
                                            ⭐ {course.rating} ({course.reviews}{" "}
                                            reviews)
                                        </p>

                                        {/* Price */}
                                        <p className="fw-bold text-primary">
                                            ₹{course.fees}
                                            {course.discount > 0 && (
                                                <span className="text-muted text-decoration-line-through ms-2">
                                                    ₹
                                                    {Math.round(
                                                        course.fees *
                                                            (100 /
                                                                (100 -
                                                                    course.discount))
                                                    )}
                                                </span>
                                            )}
                                        </p>

                                        <button className="btn btn-primary w-100 mt-2">
                                            View Course
                                        </button>
                                    </div>
                                </div>
                            </div>
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
