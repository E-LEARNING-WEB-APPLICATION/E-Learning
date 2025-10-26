import React from "react";
import "./NotificationCard.css";

const NotificationCard = ({ title, timestamp, body, type, onDelete }) => {
  const getNotificationClass = (type) => {
    switch (type) {
      case "success":
        return "notification-success";
      case "info":
        return "notification-info";
      case "warning":
        return "notification-warning";
      case "danger":
        return "notification-danger";
      default:
        return "notification-default";
    }
  };

  return (
    <div className={`notification-card ${getNotificationClass(type)} mb-3`}>
      <div className="notification-header d-flex justify-content-between align-items-start">
        <h5 className="notification-title mb-0">{title}</h5>
        <div className="d-flex align-items-center gap-2">
          <small className="notification-timestamp">{timestamp}</small>
          <button
            className="btn-close-custom"
            onClick={onDelete}
            aria-label="Delete"
          >
            <i className="bi bi-x"></i>
          </button>
        </div>
      </div>
      <p className="notification-body mt-2 mb-0">{body}</p>
    </div>
  );
};

export default NotificationCard;
