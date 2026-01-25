import React, { useState } from "react";
import NotificationStats from "./_components/NotificationStats";
import NotificationFilters from "./_components/NotificationFilters";
import NotificationTable from "./_components/NotificationTable";
import "./NotificationPage.css";
import { useNotifications } from "@/hooks/useNotifications";
import { toast } from "react-toastify";

const NotificationPage = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});
  const [selected, setSelected] = useState([]);

  const [isRead, setIsRead] = useState(false);

  const {
    data: notifications = [],
    isLoading,
    isError,
  } = useNotifications(isRead);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return toast("some error occured while fetching notifications");

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

      <div className="d-flex gap-2 mb-3">
        <button
          className={`btn ${!isRead ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setIsRead(false)}
        >
          Unread
        </button>

        <button
          className={`btn ${isRead ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setIsRead(true)}
        >
          All
        </button>
      </div>

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
