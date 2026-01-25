import React from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboardCategorySection = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h3 className="fw-bold mb-4">Top Categories</h3>

                <div className="row g-4">
                    {categories.map((cat) => (
                        <div
                            className="col-6 col-md-4 col-lg-3"
                            key={cat.id}>
                            <div
                                className="category-card card border-0 h-100 text-center p-3"
                                onClick={() =>
                                    navigate(
                                        `/student/courses/category/${cat.id}`,
                                    )
                                }>
                                {/* Image box */}
                                <div className="category-image-wrapper mb-3">
                                    <img
                                        src={cat.categoryImageUrl}
                                        alt={cat.title}
                                        className="category-image"
                                    />
                                </div>

                                {/* Title */}
                                <h6 className="fw-semibold mb-1">
                                    {cat.title}
                                </h6>

                                {/* Description */}
                                <small className="text-muted">
                                    {cat.description || "Explore courses"}
                                </small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentDashboardCategorySection;
