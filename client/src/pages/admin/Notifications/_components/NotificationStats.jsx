import React from "react";
import { FaBell, FaEnvelopeOpen, FaExclamationTriangle } from "react-icons/fa";

const NotificationStats = ({ notifications }) => {
  const unread = notifications.filter((n) => !n.readAt).length;
  const high = notifications.filter((n) => n.priority === "high").length;

  // const cardStyle = "shadow-sm rounded-3 p-3 d-flex align-items-center gap-3";

  return (
    <div className="row mb-4">
      <div className="col-md-4">
        <div className="material-card">
          <FaBell size={28} className="text-primary" />
          <div>
            <h6 className="mb-0 fw-bold">Total Notifications</h6>
            <small>{notifications.length}</small>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="material-card">
          <FaEnvelopeOpen size={28} className="text-success" />
          <div>
            <h6 className="mb-0 fw-bold">Unread</h6>
            <small>{unread}</small>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="material-card">
          <FaExclamationTriangle size={28} className="text-danger" />
          <div>
            <h6 className="mb-0 fw-bold">High Priority</h6>
            <small>{high}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationStats;
