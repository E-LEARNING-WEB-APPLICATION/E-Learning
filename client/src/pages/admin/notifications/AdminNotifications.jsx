import React, { useState } from "react";
import notificationData from "../../../../DummyData/notifications";
import NotificationCard from "../../../components/shared/NotificationCard";

const AdminNotifications = () => {

  const [notifications, setNotifications] = useState(notificationData);

  const handleDelete = (index) => {
    const filteredNotifications = notifications.filter((_, i) => i !== index);
    setNotifications(filteredNotifications);
  };

  return (
    <div className="container mt-3">
      {notifications.map((notif, index) => {
        return (
          <NotificationCard
            key={index}
            title={notif.title}
            timestamp={notif.timestamp}
            body={notif.body}
            type={notif.type}
            onDelete={() => {
              handleDelete(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default AdminNotifications;
