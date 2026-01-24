import React from "react";
import NotificationRow from "./NotificationRow";

const NotificationTable = ({ notifications, selected, setSelected }) => {
  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
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
                  onChange={(e) => {
                    if (e.target.checked)
                      setSelected(notifications.map((n) => n.id));
                    else setSelected([]);
                  }}
                  checked={selected.length === notifications.length}
                />
              </th>
              <th>Title</th>
              <th>Type</th>
              <th>User</th>
              <th>Course</th>
              <th>Priority</th>
              <th>Created</th>
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
