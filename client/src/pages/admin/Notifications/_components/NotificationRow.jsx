import React from "react";
import { FaEye, FaArchive, FaTrash } from "react-icons/fa";

const NotificationRow = ({ data, selected, toggleSelect }) => {
  const { id, title, type, userName, courseTitle, priority, createdAt } = data;

  const priorityClass = {
    high: "bg-danger text-white",
    medium: "bg-warning text-dark",
    low: "bg-secondary text-white",
  }[priority];

  return (
    <tr className="hover-light" style={{ cursor: "pointer" }}>
      <td>
        <input
          type="checkbox"
          className="material-checkbox"
          checked={selected.includes(id)}
          onChange={() => toggleSelect(id)}
        />
      </td>

      <td className="fw-semibold">{title}</td>
      <td>{type}</td>
      <td>{userName}</td>
      <td>{courseTitle}</td>

      <td>
        <span className={`badge material-chip ${priorityClass}`}>
          {priority}
        </span>
      </td>

      <td>{createdAt}</td>

      <td>
        <div className="d-flex gap-2">
          <FaEye
            size={18}
            className="material-action-icon text-primary"
            title="View"
          />
          <FaArchive
            size={18}
            className="material-action-icon text-secondary"
            title="Archive"
          />
          <FaTrash
            size={18}
            className="material-action-icon text-danger"
            title="Delete"
          />
        </div>
      </td>
    </tr>
  );
};

export default NotificationRow;
