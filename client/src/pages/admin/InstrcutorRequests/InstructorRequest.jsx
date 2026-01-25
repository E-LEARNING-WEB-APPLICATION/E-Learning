import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes, FaSearch } from "react-icons/fa";
import {
  approveInstructor,
  fetchPendingInstructors,
  fetchPendingInstructorsCount,
  rejectInstructor,
} from "@/services/admin/instructorApproval";

const InstructorRequests = () => {
  const [instructors, setInstructors] = useState([]);
  const [pendingInstructorsCount, setPendingInstructorsCount] = useState(0);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    fetchPendingInstructors().then((data) => setInstructors(data));
    fetchPendingInstructorsCount().then((res) =>
      setPendingInstructorsCount(res.data),
    );
  }, []);

  const handleApprove = async (instructorId) => {
    await approveInstructor({ instructorId });
    fetchPendingInstructors().then((data) => setInstructors(data));
    fetchPendingInstructorsCount().then((res) =>
      setPendingInstructorsCount(res.data),
    );
  };

  const handleReject = async (instructorId) => {
    await rejectInstructor({ instructorId });
    fetchPendingInstructors().then((data) => setInstructors(data));
    fetchPendingInstructorsCount().then((res) =>
      setPendingInstructorsCount(res.data),
    );
  };

  // Sorting logic
  const applySorting = (list) => {
    return list.slice().sort((a, b) => {
      if (sortBy === "name") return a.firstName.localeCompare(b.firstName);
      if (sortBy === "id") return a.instructorId.localeCompare(b.instructorId);
      if (sortBy === "dob") return new Date(a.dob) - new Date(b.dob);
      if (sortBy === "educations")
        return a.educations[0]?.degree.localeCompare(b.educations[0]?.degree);
      return 0;
    });
  };

  const filteredData = applySorting(
    instructors.filter((i) => {
      const term = search.toLowerCase();
      return (
        i.firstName.toLowerCase().includes(term) ||
        i.email.toLowerCase().includes(term) ||
        i.phoneNo.includes(term)
      );
    }),
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
              <h2 className="text-warning fw-bold">
                {pendingInstructorsCount}
              </h2>
            </div>
          </div>
        </div>

        {/* Search + Sort */}
        <div className="col-md-8 d-flex gap-3 justify-content-end">
          {/* Search */}
          <div className="input-group" style={{ maxWinstructorIdth: "280px" }}>
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
            style={{ maxWinstructorIdth: "200px" }}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="instructorId">Sort by ID</option>
            <option value="dob">Sort by DOB</option>
            <option value="educations">Sort by Education</option>
          </select>
        </div>
      </div>

      {/* ----------- TABLE ---------- */}
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-minstructorIddle mb-0">
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
                <tr key={ins.instructorId}>
                  {/* Profile + Name */}
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={ins.profilePic}
                        alt={ins.firstName}
                        className="rounded-circle border"
                        style={{
                          winstructorIdth: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="ms-3">
                        <strong>
                          {ins.firstName} {ins.lastName}
                        </strong>
                        {/* <div className="small text-muted">{ins.title}</div> */}

                        <Link
                          to={`/admin/instructors/${ins.instructorId}`}
                          className="small text-primary text-decoration-underline"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </td>

                  <td>{ins.dob}</td>
                  <td>{ins.email}</td>
                  <td>{ins.phnoneNo}</td>
                  <td>
                    {ins.educations[0]?.degree}
                    {ins.educations[0]?.fieldOfStudy && (
                      <> ({ins.educations[0].fieldOfStudy})</>
                    )}
                  </td>

                  {/* Action buttons */}
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => handleApprove(ins.instructorId)}
                    >
                      <FaCheck className="me-1" />
                      Approve
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleReject(ins.instructorId)}
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
