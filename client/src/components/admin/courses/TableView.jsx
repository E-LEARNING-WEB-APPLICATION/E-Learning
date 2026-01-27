import React, { useMemo, useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const TableView = ({ courses }) => {
  console.log(courses);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("revenueRank");
  const [sortOrder, setSortOrder] = useState("asc");

  // ---------- SEARCH ----------
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return courses.filter(
      (c) =>
        c.courseName.toLowerCase().includes(q) ||
        c.categoryName.toLowerCase().includes(q) ||
        c.instructorName.toLowerCase().includes(q),
    );
  }, [courses, search]);

  // ---------- SORT ----------
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const v1 = a[sortField];
      const v2 = b[sortField];

      if (typeof v1 === "string") {
        return sortOrder === "asc"
          ? v1.localeCompare(v2)
          : v2.localeCompare(v1);
      }
      return sortOrder === "asc" ? v1 - v2 : v2 - v1;
    });
  }, [filtered, sortField, sortOrder]);

  const toggleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortIcon = (field) =>
    sortField !== field ? (
      <FaSort className="ms-1 text-muted" />
    ) : sortOrder === "asc" ? (
      <FaSortUp className="ms-1" />
    ) : (
      <FaSortDown className="ms-1" />
    );

  // ---------- SUMMARY ----------
  const totalRevenue = courses.reduce((a, c) => a + c.totalRevenue, 0);

  return (
    <div className="mt-4">
      {/* ---- SUMMARY CARDS ---- */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>Total Courses</h6>
              <h3 className="fw-bold">{courses.length}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>Total Revenue</h6>
              <h3 className="fw-bold text-success">₹{totalRevenue}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>Categories</h6>
              <h3 className="fw-bold">
                {new Set(courses.map((c) => c.categoryId)).size}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* ---- SEARCH ---- */}
      <input
        className="form-control mb-3"
        placeholder="Search course, category, instructor…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ---- TABLE ---- */}
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th onClick={() => toggleSort("revenueRank")}>
                Rank {sortIcon("revenueRank")}
              </th>
              <th>Course</th>
              <th>Category</th>
              <th>Instructor</th>
              <th onClick={() => toggleSort("effectivePrice")}>
                Price {sortIcon("effectivePrice")}
              </th>
              <th onClick={() => toggleSort("totalEnrollments")}>
                Enrollments {sortIcon("totalEnrollments")}
              </th>
              <th onClick={() => toggleSort("totalRevenue")}>
                Revenue {sortIcon("totalRevenue")}
              </th>
              <th onClick={() => toggleSort("avgRating")}>
                Rating {sortIcon("avgRating")}
              </th>
            </tr>
          </thead>

          <tbody>
            {sorted.map((c) => (
              <tr key={c.courseId}>
                <td>
                  <span className="badge bg-primary">#{c.revenueRank}</span>
                </td>

                <td>
                  <Link
                    to={`/admin/courses/${c.courseId}`}
                    className="fw-semibold text-decoration-none"
                  >
                    {c.courseName}
                  </Link>
                  <div className="small text-muted">
                    Created {new Date(c.createdAt).toLocaleDateString()}
                  </div>
                </td>

                <td>{c.categoryName}</td>
                <td>{c.instructorName}</td>

                <td>
                  ₹{c.effectivePrice}
                  {c.discount > 0 && (
                    <div className="small text-muted">
                      <del>₹{c.price}</del> ({c.discount}% off)
                    </div>
                  )}
                </td>

                <td>
                  {c.totalEnrollments}
                  <div className="small text-muted">
                    +{c.recentEnrollments} recent
                  </div>
                </td>

                <td className="fw-bold text-success">
                  ₹{c.totalRevenue}
                  <div className="small text-muted">
                    Avg ₹{c.avgRevenuePerStudent}/student
                  </div>
                </td>

                <td>
                  ⭐ {c.avgRating.toFixed(1)}
                  <div className="small text-muted">
                    {c.totalFeedbacks} reviews
                  </div>
                </td>
              </tr>
            ))}

            {sorted.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center text-muted py-3">
                  No courses found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableView;
