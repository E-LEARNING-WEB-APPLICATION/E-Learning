import React from "react";
import "./CourseHeader.css";
import { FiHeart } from "react-icons/fi";

const CourseHeader = ({ course, isWishlisted, onWishlistToggle }) => {
  if (!course) return null;

  return (
    <div className="course-header border-bottom pb-3 px-0">
      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
        {/* Left content */}
        <div>
          <h2 className="fw-bold mb-1">{course.courseName}</h2>
          <p className="text-muted mb-0">Category: {course.category}</p>

          <div className="d-flex align-items-center mt-2">
            <span className="text-warning me-2">⭐ {course.rating}</span>
            <small className="text-muted">
              ({course.number_of_reviews} Reviews)
            </small>
          </div>
        </div>

        {/* Wishlist Button */}
        <button
          className={`wishlist-pill-btn mt-4 mx-5 ${
            isWishlisted ? "wishlisted" : ""
          }`}
          onClick={onWishlistToggle}
        >
          <FiHeart className="wishlist-icon" />
          <span className="wishlist-text">
            {isWishlisted ? "In Wishlist" : "Add to Wishlist"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CourseHeader;
