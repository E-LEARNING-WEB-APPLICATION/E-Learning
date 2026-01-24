import React, { useState } from "react";
import NotificationStats from "./_components/NotificationStats";
import NotificationFilters from "./_components/NotificationFilters";
import NotificationTable from "./_components/NotificationTable";
import "./NotificationPage.css";

const NotificationPage = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});
  const [selected, setSelected] = useState([]);
  const notifications = [
    {
      id: 1,
      title: "New User Registered",
      message: "A new student has joined the platform.",
      type: "user",
      userName: "Rahul Sharma",
      courseTitle: "-",
      priority: "high",
      createdAt: "2025-12-08 14:32",
      readAt: null,
    },
    {
      id: 2,
      title: "Course Uploaded",
      message: "New course submitted for review.",
      type: "course",
      userName: "Instructor John",
      courseTitle: "MERN Stack Bootcamp",
      priority: "medium",
      createdAt: "2025-12-07 10:15",
      readAt: "2025-12-07 11:00",
    },
  ];

  const filteredNotifications = notifications.filter((notification) => {
    const matchesType = !filters.type || filters.type === notification.type;

    const matchesPriority =
      !filters.priority || filters.priority === notification.priority;

    const matchesSearch =
      !search ||
      notification.title.toLowerCase().includes(search.toLowerCase()) ||
      notification.message.toLowerCase().includes(search.toLowerCase());

    return matchesType && matchesPriority && matchesSearch;
  });

  return (
    <div className="container py-4">
      {/* Summary Cards */}
      <NotificationStats notifications={notifications} />

      {/* Filter + Search Section */}
      <NotificationFilters
        search={search}
        setSearch={setSearch}
        setFilters={setFilters}
      />

      {/* Main Table */}
      <NotificationTable
        notifications={filteredNotifications}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default NotificationPage;
