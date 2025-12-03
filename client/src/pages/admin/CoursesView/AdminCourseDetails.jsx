import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./AdminCourseDetails.css";

const AdminCourseDetails = () => {
  const { courseId } = useParams();

  const [course, setCourse] = useState(null);
  const [students, setStudents] = useState([]);
  const [chartData, setChartData] = useState([]);

  //   useEffect(() => {
  //     fetchCourseDetails();
  //     fetchStudentList();
  //     fetchChartData();
  //   }, [courseId]);

  //   const fetchCourseDetails = async () => {
  //     const res = await fetch(`/api/admin/courses/${courseId}`);
  //     const data = await res.json();
  //     setCourse(data);
  //   };

  //   const fetchStudentList = async () => {
  //     const res = await fetch(`/api/admin/courses/${courseId}/students`);
  //     const data = await res.json();
  //     setStudents(data);
  //   };

  //   const fetchChartData = async () => {
  //     const res = await fetch(`/api/admin/courses/${courseId}/analytics`);
  //     const data = await res.json();
  //     setChartData(data);
  //   };

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      loadDummyData();
    }, 300);
  }, [courseId]);

  const loadDummyData = () => {
    // --- Dummy Course Details ---
    setCourse({
      course_id: courseId,
      course_name: "Full Stack Web Development",
      category: "Development",
      instructor_name: "John Doe",
      duration: "42 hours",
      total_enrollments: 1820,
      recent_enrollments: 32,
      revenue: 45800,
      rating: 4.6,
      rank: 12,
    });

    // --- Dummy Students List ---
    setStudents([
      {
        student_id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        enrolled_on: "2025-02-12",
        progress: 78,
      },
      {
        student_id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        enrolled_on: "2025-02-09",
        progress: 54,
      },
      {
        student_id: 3,
        name: "Charlie Williams",
        email: "charlie@example.com",
        enrolled_on: "2025-02-04",
        progress: 100,
      },
      {
        student_id: 4,
        name: "Diana Brown",
        email: "diana@example.com",
        enrolled_on: "2025-01-28",
        progress: 33,
      },
    ]);

    // --- Dummy Analytics Chart Data ---
    setChartData([
      { month: "Jan", enrollments: 120 },
      { month: "Feb", enrollments: 150 },
      { month: "Mar", enrollments: 180 },
      { month: "Apr", enrollments: 140 },
      { month: "May", enrollments: 200 },
      { month: "Jun", enrollments: 230 },
      { month: "Jul", enrollments: 190 },
    ]);
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div className="admin-course-details container py-4">
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold">{course.course_name}</h2>
        <p className="text-muted">{course.category}</p>
      </div>

      {/* Top Analytics Section */}
      <div className="row g-4">
        {/* Left Section - 3/5 width */}
        <div className="col-md-7">
          <h5 className="fw-bold mb-3">Course Performance Overview</h5>

          <div className="row g-3">
            {/* Metric Card 1 */}
            <div className="col-6">
              <div className="stat-card p-3 shadow-sm rounded d-flex align-items-center">
                <div
                  className="icon-box bg-primary text-white rounded me-3 d-flex justify-content-center align-items-center"
                  style={{ width: 45, height: 45 }}
                >
                  <i className="bi bi-people fs-4"></i>
                </div>
                <div>
                  <p className="text-muted mb-0 small">Total Enrollments</p>
                  <h5 className="fw-bold mb-0">{course.total_enrollments}</h5>
                </div>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="col-6">
              <div className="stat-card p-3 shadow-sm rounded d-flex align-items-center">
                <div
                  className="icon-box bg-success text-white rounded me-3 d-flex justify-content-center align-items-center"
                  style={{ width: 45, height: 45 }}
                >
                  <i className="bi bi-graph-up-arrow fs-4"></i>
                </div>
                <div>
                  <p className="text-muted mb-0 small">Recent Enrollments</p>
                  <h5 className="fw-bold mb-0">{course.recent_enrollments}</h5>
                </div>
              </div>
            </div>

            {/* Metric Card 3 */}
            <div className="col-6">
              <div className="stat-card p-3 shadow-sm rounded d-flex align-items-center">
                <div
                  className="icon-box bg-warning text-white rounded me-3 d-flex justify-content-center align-items-center"
                  style={{ width: 45, height: 45 }}
                >
                  <i className="bi bi-cash-coin fs-4"></i>
                </div>
                <div>
                  <p className="text-muted mb-0 small">Revenue</p>
                  <h5 className="fw-bold mb-0">${course.revenue}</h5>
                </div>
              </div>
            </div>

            {/* Metric Card 4 */}
            <div className="col-6">
              <div className="stat-card p-3 shadow-sm rounded d-flex align-items-center">
                <div
                  className="icon-box bg-info text-white rounded me-3 d-flex justify-content-center align-items-center"
                  style={{ width: 45, height: 45 }}
                >
                  <i className="bi bi-star-fill fs-4"></i>
                </div>
                <div>
                  <p className="text-muted mb-0 small">Rating</p>
                  <h5 className="fw-bold mb-0">{course.rating} ⭐</h5>
                </div>
              </div>
            </div>

            {/* Extra Details Box */}
            <div className="col-12">
              <div className="p-3 shadow-sm rounded bg-light">
                <h6 className="fw-bold">Course Info</h6>
                <p className="mb-1">
                  <strong>Instructor:</strong> {course.instructor_name}
                </p>
                <p className="mb-1">
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p className="mb-1">
                  <strong>Rank:</strong> #{course.rank}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - 2/5 width */}
        <div className="col-md-5">
          <div className="graph-card p-4 shadow-sm">
            <h5 className="fw-bold mb-3">Enrollment Trend</h5>

            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="enrollments"
                  stroke="#0d6efd"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="students-section mt-5 shadow-sm p-4">
        <h4 className="fw-bold mb-3">Enrolled Students</h4>

        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Enrollment Date</th>
              <th>Progress</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s, i) => (
              <tr key={s.student_id}>
                <td>{i + 1}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.enrolled_on}</td>
                <td>{s.progress}%</td>
                <td>
                  <button className="btn btn-danger btn-sm">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Placeholder */}
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-outline-primary me-2">Prev</button>
          <button className="btn btn-outline-primary">Next</button>
        </div>
      </div>
    </div>
  );
};

export default AdminCourseDetails;
