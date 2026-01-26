import React from "react";
import CourseCard from "./StudentCourseCard";
import StudentCourseCard from "./StudentCourseCard";

const StudentDashboardTopCourses = ({ courses = [],page }) => {
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
            <div className="container" >
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
                                } data-bs-interval="2000" `}
                                key={`slide-${slideIndex}`}>
                                <div className="row g-4">
                                    {group.map((course) => {

                                        return (
                                            <StudentCourseCard course={course} page={page} />
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
