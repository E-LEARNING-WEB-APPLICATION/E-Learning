import React, { useState, useMemo } from "react";
import { FaSort, FaSortUp, FaSortDown, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const InstructorTableView = ({ instructors, handleRemove }) => {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("fname");
  const [sortOrder, setSortOrder] = useState("asc");

  // Sorting logic
  const handleSort = (field) => {
    if (sortField === field) {
      // toggle asc ↔ desc
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedData = useMemo(() => {
    return instructors
      .filter((i) => {
        const str = search.toLowerCase();
        return (
          i.fname.toLowerCase().includes(str) ||
          i.email.toLowerCase().includes(str) ||
          i.mobile.includes(str)
        );
      })
      .sort((a, b) => {
        let v1 = a[sortField];
        let v2 = b[sortField];

        if (sortField === "education") {
          v1 = a.education.degree;
          v2 = b.education.degree;
        }

        if (typeof v1 === "string") {
          v1 = v1.toLowerCase();
          v2 = v2.toLowerCase();
        }

        if (sortOrder === "asc") return v1 > v2 ? 1 : -1;
        return v1 < v2 ? 1 : -1;
      });
  }, [instructors, search, sortField, sortOrder]);

  const renderSortIcon = (field) => {
    if (sortField !== field) return <FaSort className="ms-1 text-muted" />;
    return sortOrder === "asc" ? (
      <FaSortUp className="ms-1" />
    ) : (
      <FaSortDown className="ms-1" />
    );
  };

  const total = instructors.length;
  const approved = instructors.filter((i) => i.isApproved).length;
  const pending = total - approved;

  return (
    <div className="container py-4">
      {/* ---------- SUMMARY CARDS ---------- */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm border-primary">
            <div className="card-body">
              <h6>Total Instructors</h6>
              <h2 className="fw-bold text-primary">{total}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm border-success">
            <div className="card-body">
              <h6>Approved</h6>
              <h2 className="fw-bold text-success">{approved}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm border-warning">
            <div className="card-body">
              <h6>Pending</h6>
              <h2 className="fw-bold text-warning">{pending}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- SEARCH BAR ---------- */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold">All Instructors</h4>

        <div style={{ maxWidth: "260px" }} className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search instructor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* ---------- TABLE ---------- */}
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("id")}
                >
                  ID {renderSortIcon("id")}
                </th>

                <th
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("fname")}
                >
                  Instructor {renderSortIcon("fname")}
                </th>

                <th
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("dob")}
                >
                  DOB {renderSortIcon("dob")}
                </th>

                <th>Email</th>
                <th>Mobile</th>

                <th
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("education")}
                >
                  Education {renderSortIcon("education")}
                </th>

                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {sortedData.map((ins) => (
                <tr key={ins.id}>
                  <td>{ins.id}</td>

                  {/* Profile + name */}
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={ins.profile_pic}
                        className="rounded-circle border me-2"
                        style={{
                          width: "45px",
                          height: "45px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="text-start">
                        <strong>
                          {ins.fname} {ins.lname}
                        </strong>
                        <div className="small text-muted">{ins.title}</div>

                        <Link
                          to={`/admin/instructors/${ins.id}`}
                          className="small text-primary text-decoration-underline"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </td>

                  <td>{ins.dob}</td>
                  <td>{ins.email}</td>
                  <td>{ins.mobile}</td>

                  <td>
                    {ins.education.degree} ({ins.education.field})
                  </td>

                  <td>
                    {ins.isApproved ? (
                      <span className="badge bg-success">Approved</span>
                    ) : (
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    )}
                  </td>

                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemove(ins.id)}
                    >
                      <FaTrash className="me-1" /> Remove
                    </button>
                  </td>
                </tr>
              ))}

              {sortedData.length === 0 && (
                <tr>
                  <td className="text-center py-3 text-muted" colSpan="8">
                    No instructors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstructorTableView;
