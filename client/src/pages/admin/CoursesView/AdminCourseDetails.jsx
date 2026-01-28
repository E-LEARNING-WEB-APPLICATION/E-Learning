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

import {
  FaUsers,
  FaChartLine,
  FaRupeeSign,
  FaStar,
  FaBookOpen,
  FaChalkboardTeacher,
  FaClock,
  FaTrophy,
} from "react-icons/fa";

import {
  fetchStudentEnrolledTrendByMonthByCourse,
  fetchCourseEnrolledStudents,
} from "@/services/admin/dashboardService";

import "./AdminCourseDetails.css";
import EnrolledStudentsTable from "@/components/admin/molecules/EnrolledStudentsTable";
import { fetchCourseOverviewData } from "@/services/admin/courseStatisticsService";

const AdminCourseDetails = () => {
  const { courseId } = useParams();

  const [course, setCourse] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [studentsPage, setStudentsPage] = useState(0);
  const [studentsData, setStudentsData] = useState(null);
  const [loadingStudents, setLoadingStudents] = useState(false);

  /** -------- Fetch course overview -------- */
  useEffect(() => {
    fetchCourseOverviewData().then((data) => {
      const found = data.content.find((c) => c.courseId === courseId);
      setCourse(found);
    });
  }, [courseId]);

  /** -------- Fetch enrollment trend -------- */
  useEffect(() => {
    fetchStudentEnrolledTrendByMonthByCourse(courseId, 6).then((data) => {
      const formatted = data.map((d) => ({
        month: `${d.month}/${d.year}`,
        enrollments: d.enrolledCount,
      }));
      setChartData(formatted);
    });
  }, [courseId]);

  /** -------- Fetch enrolled students -------- */
  useEffect(() => {
    setLoadingStudents(true);
    fetchCourseEnrolledStudents(courseId, {
      page: studentsPage,
      size: 10,
    })
      .then((page) => {
        setStudentsData(page);
      })
      .finally(() => setLoadingStudents(false));
  }, [courseId, studentsPage]);

  if (!course) return <div className="p-4">Loading course...</div>;

  return (
    <div className="admin-course-details container py-4">
      {/* Header */}
      {/* Header */}
      <div className="mb-4 d-flex align-items-center gap-3">
        <div className="course-title-icon">
          <FaBookOpen size={28} />
        </div>

        <div>
          <h2 className="fw-bold mb-0 course-title">{course.courseName}</h2>
          <div className="text-muted d-flex align-items-center gap-2">
            <span className="badge bg-light text-primary">
              {course.categoryName}
            </span>
          </div>
        </div>
      </div>

      {/* Top Section */}
      <div className="row g-4">
        {/* LEFT */}
        <div className="col-md-7">
          <h5 className="fw-bold mb-3">Course Performance</h5>

          <div className="row g-3">
            <MetricCard
              label="Total Enrollments"
              value={course.totalEnrollments}
              icon={<FaUsers />}
              color="blue"
            />

            <MetricCard
              label="Recent Enrollments"
              value={course.recentEnrollments}
              icon={<FaChartLine />}
              color="green"
            />

            <MetricCard
              label="Total Revenue"
              value={`₹ ${Number(course.totalRevenue).toLocaleString()}`}
              icon={<FaRupeeSign />}
              color="purple"
            />

            <MetricCard
              label="Rating"
              value={course.avgRating ? course.avgRating.toFixed(1) : "—"}
              icon={<FaStar />}
              color="orange"
            />

            <div className="col-12">
              <div className="p-3 rounded shadow-sm course-info-box">
                <h6 className="fw-bold mb-2">Course Info</h6>

                <p className="mb-1 d-flex align-items-center gap-2">
                  <FaChalkboardTeacher className="text-primary" />
                  <strong>{course.instructorName}</strong>
                </p>

                <p className="mb-1 d-flex align-items-center gap-2">
                  <FaClock className="text-success" />
                  {course.durationInHours} hrs
                </p>

                <p className="mb-1 d-flex align-items-center gap-2">
                  <FaTrophy className="text-warning" />
                  Revenue Rank #{course.revenueRank}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-md-5">
          <div className="graph-card p-4 shadow-sm rounded">
            <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
              <FaChartLine className="text-primary" />
              Enrollment Trend
            </h5>

            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="enrollments"
                  stroke="#4a77f3"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Students */}
      <div className="mt-5">
        <EnrolledStudentsTable
          data={studentsData}
          loading={loadingStudents}
          page={studentsPage}
          onPrev={() => setStudentsPage((p) => Math.max(0, p - 1))}
          onNext={() => !studentsData?.last && setStudentsPage((p) => p + 1)}
        />
      </div>
    </div>
  );
};

export default AdminCourseDetails;

const MetricCard = ({ label, value, icon, color }) => (
  <div className="col-6">
    <div className={`stat-card p-3 rounded shadow-sm metric-${color}`}>
      <div className="d-flex align-items-center">
        <div className={`metric-icon ${color}`}>{icon}</div>
        <div>
          <p className="mb-0 small text-muted">{label}</p>
          <h5 className="fw-bold mb-0">{value}</h5>
        </div>
      </div>
    </div>
  </div>
);
