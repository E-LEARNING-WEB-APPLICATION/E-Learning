import { timeAgo } from "@/utils/helper";
import {
  FaBook,
  FaCheckCircle,
  FaCreditCard,
  FaExclamationTriangle,
  FaBell,
} from "react-icons/fa";
import "./StudentNotificationCard.css";

const typeIconMap = {
  COURSE_ENROLLED: <FaBook />,
  COURSE_COMPLETED: <FaCheckCircle />,
  COURSE_PUBLISHED: <FaBook />,
  PAYMENT_SUCCESS: <FaCreditCard />,
  PAYMENT_FAILED: <FaExclamationTriangle />,
  DEFAULT: <FaBell />,
};

const StudentNotificationCard = ({ notification, onRead, disabled }) => {
  const {
    id,
    title,
    message,
    type,
    priority,
    read,
    createdAt,
    subject,
    subjectType,
  } = notification;

  return (
    <div
      role="button"
      className={`notification-card card mb-2 shadow-sm rounded-4 position-relative overflow-hidden ${
        !read ? "unread" : ""
      } ${disabled ? "disabled-div" : ""}`}
      onClick={() => !read && onRead(id, subject, subjectType)}
    >
      {!read && (
        <span className={`priority-accent ${priority?.toLowerCase()}`} />
      )}

      <div className="card-body d-flex gap-3 align-items-start">
        <div className="notification-icon fs-4 text-primary">
          {typeIconMap[type] || typeIconMap.DEFAULT}
        </div>

        <div className="flex-grow-1">
          <div className="fw-semibold">{title}</div>
          <div className="text-muted small">{message}</div>

          <div className="d-flex justify-content-between align-items-center mt-2">
            <span className="text-muted small">{timeAgo(createdAt)}</span>

            {!read && (
              <span className="badge rounded-pill bg-primary-subtle text-primary">
                New
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentNotificationCard;
