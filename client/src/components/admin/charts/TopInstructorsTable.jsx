import { useState, useMemo } from "react";
import "./TopInstructorsTable.css";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const TopInstructorsTable = ({ data = [], loading }) => {
  const [sortField, setSortField] = useState("rankRevenue");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedData = useMemo(() => {
    if (!data || data.length === 0) return [];

    return [...data].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];

      if (aVal == null) return 1;
      if (bVal == null) return -1;

      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    });
  }, [data, sortField, sortOrder]);

  const renderSortIcon = (field) => {
    if (field !== sortField) return <FaSort className="sort-icon" />;
    return sortOrder === "asc" ? (
      <FaSortUp className="sort-icon" />
    ) : (
      <FaSortDown className="sort-icon" />
    );
  };

  return (
    <div className="chart-card p-3 shadow-sm rounded h-100">
      <h5 className="mb-3">Top Instructors</h5>

      {loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : data.length === 0 ? (
        <div className="text-center py-4 text-muted">
          No leaderboard data
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="table top-instructors-table mb-0">
            <thead>
              <tr>
                <th
                  className="sortable"
                  onClick={() => handleSort("rankRevenue")}
                >
                  Rank {renderSortIcon("rankRevenue")}
                </th>

                <th>Name</th>

                <th
                  className="sortable text-end"
                  onClick={() => handleSort("totalRevenue")}
                >
                  Revenue {renderSortIcon("totalRevenue")}
                </th>

                <th
                  className="sortable text-end"
                  onClick={() => handleSort("totalEnrollments")}
                >
                  Enrollments {renderSortIcon("totalEnrollments")}
                </th>

                <th className="text-center">Rating</th>
                <th className="text-center">Courses</th>
              </tr>
            </thead>

            <tbody>
              {sortedData.map((inst) => (
                <tr key={inst.instructorId}>
                  <td className="fw-semibold">#{inst.rankRevenue}</td>

                  <td>{inst.instructorName}</td>

                  <td className="text-end">
                    ₹ {Number(inst.totalRevenue).toLocaleString()}
                  </td>

                  <td className="text-end">
                    {inst.totalEnrollments.toLocaleString()}
                  </td>

                  <td className="text-center">
                    {inst.avgCourseRating
                      ? inst.avgCourseRating.toFixed(1)
                      : "—"}
                  </td>

                  <td className="text-center">{inst.totalCourses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TopInstructorsTable;
