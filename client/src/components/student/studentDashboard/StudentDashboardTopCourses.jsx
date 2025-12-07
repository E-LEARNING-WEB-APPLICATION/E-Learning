import React from "react";

const StudentDashboardTopCourses = ({ courses = [] }) => {
    if (!Array.isArray(courses) || courses.length === 0) return null;

    // Sort top-rated courses
    const topCourses = [...courses]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);

    // Group into chunks of 4 per slide
    const chunk = (arr, size) =>
        arr.reduce(
            (acc, _, i) =>
                i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc,
            []
        );

    const slides = chunk(topCourses, 4);

    return (
        <section className="py-5">
            <div className="container">
                <h3 className="fw-bold mb-4">Top Courses</h3>

                <div
                    id="topCoursesCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {slides.map((group, slideIndex) => (
                            <div
                                className={`carousel-item ${
                                    slideIndex === 0 ? "active" : ""
                                }`}
                                key={`slide-${slideIndex}`}>
                                <div className="row g-4">
                                    {group.map((course) => {
                                        const discountedPrice =
                                            course.fees -
                                            (course.fees * course.discount) /
                                                100;

                                        return (
                                            <div
                                                className="col-md-3"
                                                key={`course-${course.id}`}>
                                                <div className="card top-course-card h-100 shadow-sm border-0">
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
                                                        <h6 className="fw-semibold">
                                                            {course.title}
                                                        </h6>

                                                        <p className="text-muted small mb-1">
                                                            {course.category}
                                                        </p>

                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="badge bg-warning text-dark">
                                                                {course.rating}{" "}
                                                                ★
                                                            </span>
                                                            <small className="text-muted">
                                                                {course.reviews}{" "}
                                                                reviews
                                                            </small>
                                                        </div>

                                                        {/* Pricing */}
                                                        {course.discount > 0 ? (
                                                            <div className="mt-2">
                                                                <span className="text-success fw-bold me-2">
                                                                    ₹
                                                                    {discountedPrice.toFixed(
                                                                        2
                                                                    )}
                                                                </span>
                                                                <small className="text-decoration-line-through text-muted">
                                                                    ₹
                                                                    {
                                                                        course.fees
                                                                    }
                                                                </small>
                                                            </div>
                                                        ) : (
                                                            <div className="mt-2 fw-bold">
                                                                ₹{course.fees}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Prev Button */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#topCoursesCarousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>

                    {/* Next Button */}
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#topCoursesCarousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StudentDashboardTopCourses;
