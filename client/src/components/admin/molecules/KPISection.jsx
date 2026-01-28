import { useEffect, useState } from "react";
import {
  FaUsers,
  FaBook,
  FaUserPlus,
  FaMoneyBillWave,
  FaUserCheck,
} from "react-icons/fa";

import StatCard from "../atoms/StatCard";
import AdvancedStatCard from "../atoms/AdvancedStatCard";

import {
  fetchTotalStudents,
  fetchTotalInstructors,
  fetchTotalCourses,
  fetchTotalRevenue,
  fetchTotalStudentsEnrolledInLast,
  fetchTotalStudentsActiveInLast,
} from "@/services/admin/dashboardService";

const KPISection = () => {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    totalStudents: 0,
    totalInstructors: 0,
    totalCourses: 0,
    monthlyRevenue: 0,
    enrollments: {
      daily: 0,
      weekly: 0,
      monthly: 0,
    },
    activeStudents: {
      daily: 0,
      weekly: 0,
      monthly: 0,
    },
  });

  useEffect(() => {
    const loadKPIs = async () => {
      try {
        setLoading(true);

        const [
          totalStudents,
          { data },
          totalCourses,
          monthlyRevenue,
          dailyEnrollments,
          weeklyEnrollments,
          monthlyEnrollments,
          dailyActive,
          weeklyActive,
          monthlyActive,
        ] = await Promise.all([
          fetchTotalStudents(),
          fetchTotalInstructors(),
          fetchTotalCourses(),
          fetchTotalRevenue(),
          fetchTotalStudentsEnrolledInLast("1d"),
          fetchTotalStudentsEnrolledInLast("1w"),
          fetchTotalStudentsEnrolledInLast("1m"),
          fetchTotalStudentsActiveInLast("1d"),
          fetchTotalStudentsActiveInLast("1w"),
          fetchTotalStudentsActiveInLast("1m"),
        ]);

        console.log(
          totalStudents,
          data,
          totalCourses,
          monthlyRevenue,
          dailyEnrollments,
          weeklyEnrollments,
          monthlyEnrollments,
          dailyActive,
          weeklyActive,
          monthlyActive,
        );

        setStats({
          totalStudents,
          totalInstructors: data,
          totalCourses,
          monthlyRevenue,
          enrollments: {
            daily: dailyEnrollments,
            weekly: weeklyEnrollments,
            monthly: monthlyEnrollments,
          },
          activeStudents: {
            daily: dailyActive,
            weekly: weeklyActive,
            monthly: monthlyActive,
          },
        });
      } finally {
        setLoading(false);
      }
    };

    loadKPIs();
  }, []);

  if (loading) {
    return <div className="text-muted">Loading dashboard stats...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="row row-cols-md-6 g-3">
        <StatCard
          title="Total Students"
          value={stats.totalStudents}
          icon={<FaUsers size={28} />}
          color="danger"
        />

        <StatCard
          title="Total Instructors"
          value={stats.totalInstructors}
          icon={<FaUsers size={28} />}
          color="warning"
        />

        <AdvancedStatCard
          title="New Enrollments"
          stats={stats.enrollments}
          icon={<FaUserPlus size={28} />}
        />

        <StatCard
          title="Total Courses"
          value={stats.totalCourses}
          icon={<FaBook size={28} />}
        />

        <AdvancedStatCard
          title="Active Students"
          stats={stats.activeStudents}
          icon={<FaUserCheck size={28} />}
        />

        <StatCard
          title="Revenue (Monthly)"
          value={`₹${stats.monthlyRevenue.toLocaleString()}`}
          icon={<FaMoneyBillWave size={28} />}
          color="success"
        />
      </div>
    </div>
  );
};

export default KPISection;
