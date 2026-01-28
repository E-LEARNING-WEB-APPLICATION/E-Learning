import React, { useState, useMemo } from "react";
import { FaSort, FaSortUp, FaSortDown, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const statusColorMap = {
  REJECTED: "badge bg-danger text-white",
  PENDING: "badge bg-warning text-dark",
  ACTIVE: "badge bg-success text-white",
};

const InstructorTableView = ({ instructors, handleRemove }) => {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  /* ---------------- SORT HANDLER ---------------- */
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  /* ---------------- FILTER + SORT ---------------- */
  const sortedData = useMemo(() => {
    return instructors
      .filter((i) => {
        const term = search.toLowerCase();
        return (
          i.firstName.toLowerCase().includes(term) ||
          i.lastName.toLowerCase().includes(term) ||
          i.email.toLowerCase().includes(term) ||
          (i.phoneNo && i.phoneNo.includes(term))
        );
      })
      .sort((a, b) => {
        let v1 = "";
        let v2 = "";

        switch (sortField) {
          case "name":
            v1 = `${a.firstName} ${a.lastName}`;
            v2 = `${b.firstName} ${b.lastName}`;
            break;

          case "dob":
            v1 = a.dob || "";
            v2 = b.dob || "";
            break;

          case "education":
            v1 = a.educations[0]?.degree || "";
            v2 = b.educations[0]?.degree || "";
            break;

          default:
            break;
        }

        v1 = typeof v1 === "string" ? v1.toLowerCase() : v1;
        v2 = typeof v2 === "string" ? v2.toLowerCase() : v2;

        if (sortOrder === "asc") return v1 > v2 ? 1 : -1;
        return v1 < v2 ? 1 : -1;
      });
  }, [instructors, search, sortField, sortOrder]);

  /* ---------------- SORT ICON ---------------- */
  const renderSortIcon = (field) => {
    if (sortField !== field) return <FaSort className="ms-1 text-muted" />;
    return sortOrder === "asc" ? (
      <FaSortUp className="ms-1" />
    ) : (
      <FaSortDown className="ms-1" />
    );
  };

  /* ---------------- SUMMARY COUNTS ---------------- */
  const total = instructors.length;
  const approved = instructors.filter((i) => i.status === "ACTIVE").length;
  const pending = instructors.filter((i) => i.status === "PENDING").length;

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

      {/* ---------- SEARCH ---------- */}
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
                {/* <th>ID</th> */}

                <th
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("name")}
                >
                  Instructor {renderSortIcon("name")}
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
                <tr key={ins.instructorId}>
                  {/* <td>{ins.instructorId}</td> */}

                  {/* Profile + Name */}
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={ins.profilePic || "/default-avatar.png"}
                        alt={ins.firstName}
                        className="rounded-circle border me-2"
                        style={{
                          width: "45px",
                          height: "45px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <Link
                          to={`/admin/profile-view/${ins.instructorId}`}
                          className="text-primary text-decoration-none"
                        >
                          <strong>
                            {ins.firstName} {ins.lastName}
                          </strong>
                        </Link>
                      </div>
                    </div>
                  </td>

                  <td>{ins.dob || "—"}</td>
                  <td>{ins.email}</td>
                  <td>{ins.phoneNo}</td>

                  <td>
                    {ins.educations.length > 0 ? (
                      ins.educations[0].degree
                    ) : (
                      <span className="text-muted">N/A</span>
                    )}
                  </td>

                  <td>
                    {/* {ins.status === "ACTIVE" ? (
                      <span className="badge bg-success">Approved</span>
                    ) : (
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    )} */}
                    <span className={statusColorMap[ins.status]}>
                      {ins.status}
                    </span>
                  </td>

                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemove(ins.instructorId)}
                    >
                      <FaTrash className="me-1" /> Remove
                    </button>
                  </td>
                </tr>
              ))}

              {sortedData.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center py-3 text-muted">
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
