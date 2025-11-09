import React, { useEffect, useState } from "react";

import NotificationCard from "@/components/shared/NotificationCard";

import { getAdminNotification } from "@/api/api";

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getAdminNotification().then((data) => setNotifications(data));
  }, []);

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
