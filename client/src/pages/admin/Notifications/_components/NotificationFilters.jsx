import React from "react";

const NotificationFilters = ({ search, setSearch, setFilters }) => {
  return (
    <div className="card shadow-sm p-3 mb-4">
      <div className="row g-3">
        <div className="col-md-6">
          <input
            className="form-control material-input"
            placeholder="Search notifications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select material-select"
            onChange={(e) =>
              setFilters((f) => ({ ...f, type: e.target.value }))
            }
          >
            <option value="">Filter by Type</option>
            <option value="user">User</option>
            <option value="course">Course</option>
            <option value="payment">Payment</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select material-select"
            onChange={(e) =>
              setFilters((f) => ({ ...f, priority: e.target.value }))
            }
          >
            <option value="">Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NotificationFilters;
