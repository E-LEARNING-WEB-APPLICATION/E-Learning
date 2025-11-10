import React from "react";
import { FaStar, FaPlayCircle } from "react-icons/fa";
import "./CourseCard.css"; // CSS file below

const CourseCard = ({ course }) => {
  return (
    <div className="course-card shadow-sm">
      <div className="course-thumbnail position-relative">
        <img
          src={course.course_thumbnail}
          alt={course.course_name}
          className="img-fluid rounded-top"
        />
        <div className="video-overlay">
          <FaPlayCircle className="play-icon" />
        </div>
      </div>

      <div className="course-body p-3">
        <h5 className="course-title mb-1">{course.course_name}</h5>
        <p className="course-category mb-2">{course.category}</p>
        <p className="course-desc text-muted small mb-3">
          {course.course_desc}
        </p>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="course-duration text-primary fw-semibold">
            ⏱ {course.course_duration}
          </span>
          <div className="rating d-flex align-items-center">
            <FaStar className="text-warning me-1" />
            <span>{course.rating}</span>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className="price fw-bold text-dark">
              ${course.fees.toFixed(2)}
            </span>
            {course.discount_percentage > 0 && (
              <span className="discount ms-2 text-success">
                -{course.discount_percentage}%
              </span>
            )}
          </div>
          <button className="btn btn-primary btn-sm px-3 rounded-pill">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
