import React from "react";
import NotificationRow from "./NotificationRow";

const NotificationTable = ({ notifications, selected, setSelected }) => {
  const toggleSelect = (id) => {
    setSelected(
      selected.includes(id)
        ? selected.filter((i) => i !== id)
        : [...selected, id],
    );
  };

  return (
    <div className="card shadow-sm">
      <div className="table-responsive material-table-wrapper">
        <table className="table align-middle mb-0 material-table">
          <thead className="table-light">
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selected.length === notifications.length}
                  onChange={(e) =>
                    setSelected(
                      e.target.checked ? notifications.map((n) => n.id) : [],
                    )
                  }
                />
              </th>
              <th>Notification</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {notifications.map((n) => (
              <NotificationRow
                key={n.id}
                data={n}
                selected={selected}
                toggleSelect={toggleSelect}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotificationTable;
