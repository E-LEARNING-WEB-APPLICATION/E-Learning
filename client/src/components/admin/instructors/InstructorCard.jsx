import "./InstructorCard.css";
import { useNavigate } from "react-router-dom";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegTrashAlt } from "react-icons/fa";

const InstructorCard = ({ user, onDelete }) => {
  const navigate = useNavigate();

  const { fname, lname, education, email, mobile, profile_pic, isApproved } = user;

  const handleProfileClick = (e) => {
    e.stopPropagation();
    navigate(`/instructor/${user.id}`);
  };

  const handleCardClick = () => {
    navigate(`/admin/instructor-courses`, { state: user.id });
  };

  return (
    <div className="instructor-card" onClick={handleCardClick}>
      <div className="card-header">
        <img
          src={profile_pic}
          alt="Profile"
          className="profile-image"
          onClick={handleProfileClick}
        />

        <div className="instructor-info ellipsis">
          <h5>{fname} {lname}</h5>
          <p className="education ellipsis">{education.degree} - {education.field}</p>
          <p className="email ellipsis">{email}</p>
          <p className="mobile ellipsis">{mobile}</p>
        </div>

        <div className={`status-badge ${isApproved ? "approved" : "rejected"}`}>
          {isApproved ? <IoShieldCheckmarkOutline /> : <RxCrossCircled />}
        </div>
      </div>

      <div className="card-footer">
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(user.id);
          }}
        >
          <FaRegTrashAlt /> Delete
        </button>
      </div>
    </div>
  );
};

export default InstructorCard;
