import React from "react";
import "./CourseHeader.css";

const CourseHeader = ({ course }) => {
  if (!course) return null;
  return (
    <div className="course-header border-bottom pb-3 px-0">
      <h2 className="fw-bold mb-1">{course.courseName}</h2>
      <p className="text-muted mb-0">Category: {course.category}</p>

      <div className="d-flex align-items-center mt-2">
        <span className="text-warning me-2">⭐ {course.rating}</span>
        <small className="text-muted">
          ({course.number_of_reviews} Reviews)
        </small>
      </div>
    </div>
  );
};

export default CourseHeader;
