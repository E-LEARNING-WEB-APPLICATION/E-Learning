import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./AdminCourseCard.css";

const AdminCourseCard = ({ course }) => {
  const navigate = useNavigate();

  const openCourseDetails = () => {
    navigate(`/admin/courses/${course.courseId}`);
  };

  return (
    <div
      className="course-card shadow-sm clickable"
      onClick={openCourseDetails}
      style={{ cursor: "pointer" }}
    >
      <div className="course-thumbnail position-relative">
        <img
          src={course.course_thumbnail}
          alt={course.course_name}
          className="img-fluid rounded-top"
        />
      </div>

      <div className="course-body p-3">
        <h5 className="course-title mb-1">{course.course_name}</h5>
        <p className="course-category mb-2">{course.category}</p>

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

          <button
            className="btn btn-primary btn-sm px-3 rounded-pill"
            onClick={(e) => {
              e.stopPropagation();
              openCourseDetails();
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCourseCard;
