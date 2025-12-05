import React from "react";
import "./CourseHeader.css";

const CourseHeader = ({ course }) => {
  if (!course) return null;
  return (
    <div className="course-header border-bottom pb-3 px-0">
      <h2 className="fw-bold mb-1">{course[0].course_name}</h2>
      <p className="text-muted mb-0">Category: {course[0].category}</p>

      <div className="d-flex align-items-center mt-2">
        <span className="text-warning me-2">⭐ {course[0].rating}</span>
        <small className="text-muted">
          ({course[0].number_of_reviews} Reviews)
        </small>
      </div>
    </div>
  );
};

export default CourseHeader;
