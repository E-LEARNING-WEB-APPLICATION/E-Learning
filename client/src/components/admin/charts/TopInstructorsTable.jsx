import { useState } from "react";
import "./TopInstructorsTable.css";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const TopInstructorsTable = ({ data }) => {
  const [sortField, setSortField] = useState("revenue");
  const [sortOrder, setSortOrder] = useState("desc");

  const sortData = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("desc");
    }
  };

  const sorted = [...data].sort((a, b) => {
    if (sortOrder === "asc") return a[sortField] - b[sortField];
    return b[sortField] - a[sortField];
  });

  const renderSortIcon = (field) => {
    if (field !== sortField) return <FaSort className="sort-icon" />;
    return sortOrder === "asc" ? (
      <FaSortUp className="sort-icon" />
    ) : (
      <FaSortDown className="sort-icon" />
    );
  };

  return (
    <div className="chart-card p-3 shadow-sm rounded">
      <h5 className="mb-3">Top Instructors</h5>

      <table className="table top-instructors-table">
        <thead>
          <tr>
            <th>Name</th>
            <th onClick={() => sortData("revenue")} className="sortable">
              Revenue {renderSortIcon("revenue")}
            </th>
            <th onClick={() => sortData("enrollments")} className="sortable">
              Enrollments {renderSortIcon("enrollments")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((inst, index) => (
            <tr key={index}>
              <td>{inst.name}</td>
              <td>₹ {inst.revenue.toLocaleString()}</td>
              <td>{inst.enrollments.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopInstructorsTable;
