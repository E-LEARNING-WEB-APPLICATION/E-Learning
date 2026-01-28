import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

import "./TopCoursesTable.css";

const TopCoursesTable = ({ data = [], loading }) => {
  const navigate = useNavigate();

  const [sortField, setSortField] = useState("enrollments");
  const [sortOrder, setSortOrder] = useState("desc");

  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("desc");
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
    <div className="col-12">
      <div className="chart-card p-3 shadow-sm rounded h-100">
        <h5 className="mb-3">Top Courses</h5>

        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : data.length === 0 ? (
          <div className="text-center py-4 text-muted">
            No course data available
          </div>
        ) : (
          <div className="table-wrapper">
            <table className="table top-courses-table mb-0">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Instructor</th>

                  <th
                    className="sortable text-end"
                    onClick={() => handleSort("enrollments")}
                  >
                    Enrollments {renderSortIcon("enrollments")}
                  </th>

                  <th
                    className="sortable text-center"
                    onClick={() => handleSort("rating")}
                  >
                    Rating {renderSortIcon("rating")}
                  </th>
                </tr>
              </thead>

              <tbody>
                {sortedData.map((course) => (
                  <tr
                    key={course.courseId}
                    className="clickable-row"
                    onClick={() =>
                      navigate(`/admin/courses/${course.courseId}`)
                    }
                  >
                    <td className="fw-semibold">{course.title}</td>

                    <td>{course.instructor}</td>

                    <td className="text-end">
                      {course.enrollments.toLocaleString()}
                    </td>

                    <td className="text-center">
                      {course.rating ? course.rating.toFixed(1) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopCoursesTable;
