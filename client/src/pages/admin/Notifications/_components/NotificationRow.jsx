import React from "react";
import {
  FaEye,
  FaArchive,
  FaTrash,
  FaBook,
  FaUserGraduate,
  FaCreditCard,
  FaExclamationTriangle,
} from "react-icons/fa";

const typeIconMap = {
  INSTRUCTOR_APPROVAL_PENDING: <FaUserGraduate />,
  COURSE_SUBMITTED_FOR_REVIEW: <FaBook />,
  COURSE_REJECTED: <FaBook />,
  USER_REPORTED: <FaExclamationTriangle />,

  COURSE_APPROVED: <FaBook />,
  COURSE_REJECTED_BY_ADMIN: <FaBook />,
  STUDENT_ENROLLED: <FaUserGraduate />,
  COURSE_PUBLISHED: <FaBook />,

  COURSE_ENROLLED: <FaBook />,
  COURSE_COMPLETED: <FaBook />,
  PAYMENT_SUCCESS: <FaCreditCard />,
  PAYMENT_FAILED: <FaCreditCard />,

  PASSWORD_CHANGED: <FaExclamationTriangle />,
  ACCOUNT_SUSPENDED: <FaExclamationTriangle />,
};

const priorityClassMap = {
  HIGH: "bg-danger text-white",
  MEDIUM: "bg-warning text-dark",
  LOW: "bg-secondary text-white",
};

const formatTime = (iso) =>
  new Date(iso).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

const NotificationRow = ({ data, selected, toggleSelect }) => {
  const { id, title, message, priority, type, createdAt, read } = data;

  return (
    <tr className={`hover-light notification-row ${!read ? "unread" : ""}`}>
      <td>
        <input
          type="checkbox"
          className="material-checkbox"
          checked={selected.includes(id)}
          onChange={() => toggleSelect(id)}
        />
      </td>

      {/* Notification content */}
      <td className="notification-cell">
        <div className="d-flex gap-3 align-items-start">
          <div className="notification-icon text-primary">
            {typeIconMap[type]}
          </div>

          <div className="flex-grow-1">
            <div className="fw-semibold">{title}</div>
            <div className="text-muted small">{message}</div>

            <div className="notification-timestamp">
              {formatTime(createdAt)}
            </div>
          </div>
        </div>
      </td>

      {/* Priority */}
      <td>
        <span className={`badge material-chip ${priorityClassMap[priority]}`}>
          {priority.toLowerCase()}
        </span>
      </td>

      {/* Actions */}
      <td>
        <div className="d-flex gap-2">
          <FaEye
            size={16}
            className="material-action-icon text-primary"
            title="View"
          />
          <FaArchive
            size={16}
            className="material-action-icon text-secondary"
            title="Archive"
          />
          <FaTrash
            size={16}
            className="material-action-icon text-danger"
            title="Delete"
          />
        </div>
      </td>
    </tr>
  );
};

export default NotificationRow;
