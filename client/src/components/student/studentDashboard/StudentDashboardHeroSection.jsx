import { getCourseStatusById } from "@/services/courseService";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StudentDashboardHeroSection = ({ courses, page }) => {
    const discounted = courses.filter((c) => c.discount > 0);
    const heroCourses = discounted.length > 0 ? discounted : courses;
    const navigate = useNavigate();
    const handleView = async (courseId) => {
        if (page == "guest") {
            toast.warn("Please Login to explore course");
            setTimeout(() => {
                navigate("/guest/login");
            }, 2000);
        } else {
            try {
                const response = await getCourseStatusById(courseId);
                console.log(response);
                if (!response.success) {
                    navigate("/student/course-details", {
                        state: {
                            courseId: courseId,
                        },
                    });
                } else {
                    navigate("/student/enrolled-course-details", {
                        state: {
                            courseId: courseId,
                        },
                    });
                }
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    const handleExplore = () => {
        if (page == "guest") {
            navigate("/guest/courses/explore", {
                state: { page },
            });
        } else {
            navigate("/student/courses/explore");
        }
    };
    return (
        <section
            className="py-5 text-white"
            style={{
                background: "linear-gradient(135deg, #6a11cb 0%, #b92b27 100%)",
            }}>
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* LEFT SIDE TEXT */}
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold mb-3">
                            Learn Anything. Anytime.
                        </h1>

                        <p className="lead mb-4">
                            Get <strong>big discounts</strong> on top-rated
                            courses. Learn from industry experts with hands-on
                            practice.
                        </p>

                        <div className="d-flex gap-3">
                            <a
                                onClick={handleExplore}
                                className="btn btn-light btn-lg fw-semibold">
                                Explore Courses
                            </a>
                            <a
                                href="#"
                                className="btn btn-outline-light btn-lg fw-semibold">
                                Start Learning
                            </a>
                        </div>

                        <p className="mt-4 small text-white-50">
                            Deals refresh automatically • Discounts applied live
                        </p>
                    </div>

                    {/* RIGHT SIDE BOOTSTRAP CAROUSEL */}
                    <div className="col-lg-6">
                        <div
                            id="heroCarousel"
                            className="carousel slide carousel-fade rounded-4 shadow-lg overflow-hidden"
                            data-bs-ride="carousel"
                            data-bs-interval="3500">
                            {/* Carousel Slides */}
                            <div className="carousel-inner">
                                {heroCourses.map((course, index) => {
                                    const finalPrice =
                                        course.fees -
                                        (course.fees * course.discount) / 100;

                                    return (
                                        <div
                                            key={course.id}
                                            className={`carousel-item ${
                                                index === 0 ? "active" : ""
                                            }`}>
                                            {/* COURSE IMAGE */}
                                            <img
                                                src={course.thumbnail}
                                                className="d-block w-100"
                                                style={{
                                                    height: "260px",
                                                    objectFit: "cover",
                                                }}
                                                alt={course.title}
                                            />

                                            {/* CAPTION */}
                                            <div className="carousel-caption d-block bg-dark bg-opacity-50 rounded-4 p-3">
                                                <h4 className="fw-bold">
                                                    {course.title}
                                                </h4>

                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    {/* Final price */}
                                                    <span className="fw-bold fs-5 text-warning">
                                                        ₹{finalPrice.toFixed(2)}
                                                    </span>

                                                    {/* Original & discount */}
                                                    {course.discount > 0 && (
                                                        <>
                                                            <small className="text-decoration-line-through text-light">
                                                                ₹{course.fees}
                                                            </small>
                                                            <span className="badge bg-danger">
                                                                {
                                                                    course.discount
                                                                }
                                                                % OFF
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                                <a
                                                    onClick={() => {
                                                        handleView(course.id);
                                                    }}
                                                    className="btn btn-warning btn-sm mt-3 fw-semibold">
                                                    Enroll Now
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Prev button */}
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#heroCarousel"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>

                            {/* Next button */}
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#heroCarousel"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentDashboardHeroSection;
