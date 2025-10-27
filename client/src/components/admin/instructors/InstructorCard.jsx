import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InstructorCard.css";
import { useNavigate } from "react-router-dom";

const InstructorCard = ({ user, onDelete }) => {
    const navigate = useNavigate()

  const { id, fname, lname, education, email, mobile, profile_pic, isApproved } = user;
  
    const handleProfileClick = (e) => {
    // Prevent the click event from bubbling up to the parent div (the card)
    e.stopPropagation();
    // Navigate to the instructor page
    navigate(`/instructor/${user.id}`);
  };

  const handleCardClick = () => {
    // Navigate to the courses page when the card itself is clicked
    navigate(`/courses/${user.id}`);
  };
  
  return (
    <div className="card user-card shadow-sm mb-3">
      <div className="card-body position-relative"> {/* Set position relative to control the icon */}
        <div className="d-flex align-items-center btn" onClick={handleCardClick}>
          {/* Profile Picture */}
          <img
            src={profile_pic}
            alt="Profile"
            className="rounded-circle border border-light btn"
            width="100"
            height="100"
            onClick={handleProfileClick}
          />

          {/* User Info */}
          <div className="ms-3">
            <h5 className="card-title mb-0">
              {fname} {lname}
            </h5>
            <p className="card-subtitle text-muted mb-1">{education.degree} - {education.field}</p>
            <p className="card-text mb-0">{email}</p>
            <p className="card-text">{mobile}</p>
          </div>

          {/* Approved Status using Bootstrap Icons */}
          <div className="approved-icon">
            {isApproved ? (
              <i className="bi bi-check-circle text-success"></i>
            ) : (
              <i className="bi bi-x-circle text-danger"></i>
            )}
          </div>
        </div>

        {/* Delete Button */}
        <button
          className="btn btn-outline-danger btn-sm mt-2"
          onClick={() => { onDelete(user.id) }}
        >
          <i className="bi bi-trash"></i> Delete
        </button>
      </div>
    </div>
  );
};

export default InstructorCard;
