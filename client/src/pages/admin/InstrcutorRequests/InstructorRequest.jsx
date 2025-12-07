import React, { useEffect, useState } from "react";
import { getInstructors } from "@/api/api";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes, FaSearch } from "react-icons/fa";

const InstructorRequests = () => {
  const [instructors, setInstructors] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const fetchInstructors = () => {
    getInstructors().then((data) => {
      const pending = data.filter((i) => !i.isApproved);
      setInstructors(pending);
    });
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  const handleApprove = (id) => {
    console.log("approve", id);
  };

  const handleReject = (id) => {
    console.log("reject", id);
  };

  // Sorting logic
  const applySorting = (list) => {
    return list.slice().sort((a, b) => {
      if (sortBy === "name") return a.fname.localeCompare(b.fname);
      if (sortBy === "id") return a.id.localeCompare(b.id);
      if (sortBy === "dob") return new Date(a.dob) - new Date(b.dob);
      if (sortBy === "education")
        return a.education.degree.localeCompare(b.education.degree);
      return 0;
    });
  };

  const filteredData = applySorting(
    instructors.filter((i) => {
      const term = search.toLowerCase();
      return (
        i.fname.toLowerCase().includes(term) ||
        i.email.toLowerCase().includes(term) ||
        i.mobile.includes(term)
      );
    })
  );

  return (
    <div className="container py-4">

      {/* ---------- TOP HEADER ---------- */}
      <div className="row mb-4 align-items-center">
        
        {/* Pending Approvals Card */}
        <div className="col-md-4 mb-3">
          <div className="card border-warning shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-1">Pending Instructor Approvals</h5>
              <h2 className="text-warning fw-bold">{instructors.length}</h2>
            </div>
          </div>
        </div>

        {/* Search + Sort */}
        <div className="col-md-8 d-flex gap-3 justify-content-end">

          {/* Search */}
          <div className="input-group" style={{ maxWidth: "280px" }}>
            <span className="input-group-text bg-white">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search instructor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Sort dropdown */}
          <select
            className="form-select"
            style={{ maxWidth: "200px" }}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="id">Sort by ID</option>
            <option value="dob">Sort by DOB</option>
            <option value="education">Sort by Education</option>
          </select>
        </div>
      </div>

      {/* ----------- TABLE ---------- */}
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Instructor</th>
                <th>DOB</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Education</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((ins) => (
                <tr key={ins.id}>
                  
                  {/* Profile + Name */}
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={ins.profile_pic}
                        alt={ins.fname}
                        className="rounded-circle border"
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                      />
                      <div className="ms-3">
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

                  {/* Action buttons */}
                  <td className="text-center">

                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => handleApprove(ins.id)}
                    >
                      <FaCheck className="me-1" />
                      Approve
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleReject(ins.id)}
                    >
                      <FaTimes className="me-1" />
                      Reject
                    </button>

                  </td>
                </tr>
              ))}

              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-muted">
                    No pending instructor requests.
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

export default InstructorRequests;
