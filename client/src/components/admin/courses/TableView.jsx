import React, { useState, useMemo } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CourseTableView.css";

const TableView = ({ courses }) => {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 8;

  // ---- SEARCH ----
  const filteredCourses = useMemo(() => {
    return courses.filter((c) =>
      c.course_name.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [courses, search]);

  // ---- SORT ----
  const sortedCourses = useMemo(() => {
    if (!sortField) return filteredCourses;

    return [...filteredCourses].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];

      if (typeof aVal === "string") {
        return sortOrder === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    });
  }, [filteredCourses, sortField, sortOrder]);

  const totalPages = Math.ceil(sortedCourses.length / rowsPerPage);

  const paginatedCourses = sortedCourses.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // ---- HANDLE SORT CHANGE ----
  const toggleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const renderSortIcon = (field) => {
    if (sortField !== field) return <FaSort className="text-muted" />;

    return sortOrder === "asc" ? (
      <FaSortUp />
    ) : (
      <FaSortDown />
    );
  };

  return (
    <div className="container mt-4 course-page">

      {/* -------- SUMMARY CARDS -------- */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="summary-card shadow-sm">
            <h6>Total Courses</h6>
            <h2>{courses.length}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="summary-card shadow-sm">
            <h6>Categories</h6>
            <h2>{new Set(courses.map((c) => c.category)).size}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="summary-card shadow-sm">
            <h6>Total Revenue</h6>
            <h2>₹{courses.reduce((a, b) => a + b.fees, 0)}</h2>
          </div>
        </div>
      </div>

      {/* -------- SEARCH BAR -------- */}
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by course or category..."
          value={search}
          onChange={(e) => {
            setCurrentPage(1);
            setSearch(e.target.value);
          }}
        />
      </div>

      {/* -------- TABLE -------- */}
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th onClick={() => toggleSort("courseId")} className="sortable">
                ID {renderSortIcon("courseId")}
              </th>
              <th onClick={() => toggleSort("course_name")} className="sortable">
                Course Name {renderSortIcon("course_name")}
              </th>
              <th onClick={() => toggleSort("category")} className="sortable">
                Category {renderSortIcon("category")}
              </th>
              <th onClick={() => toggleSort("iId")} className="sortable">
                Instructor {renderSortIcon("iId")}
              </th>
              <th onClick={() => toggleSort("fees")} className="sortable">
                Price {renderSortIcon("fees")}
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedCourses.map((course) => (
              <tr key={course.courseId}>
                <td>{course.courseId}</td>

                {/* course link */}
                <td>
                  <Link
                    to={`/admin/course/${course.courseId}`}
                    className="course-link"
                  >
                    {course.course_name}
                  </Link>
                </td>

                <td>{course.category}</td>
                <td>{course.iId}</td>
                <td>₹{course.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* -------- PAGINATION -------- */}
      <nav className="mt-3">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Previous
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}

          <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default TableView;
