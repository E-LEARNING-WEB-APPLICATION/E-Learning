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
                            <div className="card border-0 shadow-sm h-100 category-card p-3 text-center"
                            onClick={()=> navigate(`/student/courses/category/${cat.id}`)}
                            style={{ cursor: "pointer" }}>
                                <div className="icon-box mb-3">
                                    <div
                                        style={{
                                            color: cat.color,
                                            fontSize: "2.6rem",
                                        }}>
                                        <cat.icon />
                                    </div>
                                </div>

                                <h6 className="fw-semibold">{cat.title}</h6>
                                <small className="text-muted">
                                    Explore courses
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
