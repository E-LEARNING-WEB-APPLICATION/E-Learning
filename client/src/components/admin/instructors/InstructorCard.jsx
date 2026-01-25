import "./InstructorCard.css";
import { useNavigate } from "react-router-dom";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegTrashAlt } from "react-icons/fa";

const InstructorCard = ({ user, onDelete }) => {
  const navigate = useNavigate();

  const {
    firstName,
    lastName,
    educations,
    email,
    phoneNo,
    profilePic,
    status,
  } = user;
  const isApproved = status == "APPROVED" ? true : false;
  const handleProfileClick = (e) => {
    e.stopPropagation();
    navigate(`/instructor/${user.instructorId}`);
  };

  const handleCardClick = () => {
    navigate(`/admin/instructor-courses`, { state: user.instructorId });
  };

  return (
    <div className="instructor-card" onClick={handleCardClick}>
      <div className="card-header">
        {/* Image Wrapper */}
        <div className="image-wrapper" onClick={handleProfileClick}>
          <img src={profilePic} alt="Profile" className="profile-image" />

          {/* Badge now inside wrapper */}
          <div
            className={`status-badge ${isApproved ? "approved" : "rejected"}`}
          >
            {isApproved ? <IoShieldCheckmarkOutline /> : <RxCrossCircled />}
          </div>
        </div>

        {/* Info Section */}
        <div className="instructor-info ellipsis">
          <h5>
            {firstName} {lastName}
          </h5>
          <p className="educations ellipsis">
            {educations?.degree} - {educations?.field}
          </p>
          <p className="email ellipsis">{email}</p>
          <p className="mobile ellipsis">{phoneNo}</p>
        </div>
      </div>

      <div className="card-footer">
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(user.instructorId);
          }}
        >
          <FaRegTrashAlt /> Delete
        </button>
      </div>
    </div>
  );
};

export default InstructorCard;
