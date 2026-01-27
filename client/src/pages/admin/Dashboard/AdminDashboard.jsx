import React, { useEffect, useState } from "react";

import KPISection from "@/components/admin/molecules/KPISection";
import RevenueTrend from "@/components/admin/molecules/RevenueTrend";
import TopCoursesTable from "@/components/admin/molecules/TopCoursesTable";
import TopInstructorsAndRatings from "@/components/admin/molecules/TopInstructorsAndRatings";
import EnrollmentAndCategory from "@/components/admin/molecules/EnrollmentAndCategory";
import { fetchTopCoursesByEnrollments } from "@/services/admin/dashboardService";
// import RecentPanels from "@/components/admin/molecules/RecentPanels";

const AdminDashboard = () => {
  const [topCourses, setTopCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  useEffect(() => {
    fetchTopCoursesByEnrollments({ top: 10 })
      .then((res) => setTopCourses(res))
      .finally(() => setLoadingCourses(false));
  }, []);

  return (
    <div>
      <h3 className="mb-4 fw-bold text-primary">Welcome Admin</h3>

      <div className="container-fluid dashboard-container">
        {/* 1) KPI SECTION */}
        <KPISection />

        {/* 2) Revenue Trend Full Row */}
        <div className="row mt-4">
          <div className="col-12">
            <RevenueTrend />
          </div>
        </div>

        {/* 3) Enrollment Trend & User Growth */}
        <div className="row mt-4">
          <EnrollmentAndCategory />
        </div>

        {/* 4) Category Pie + Ratings Bar */}
        <div className="row mt-4">
          <TopInstructorsAndRatings />
        </div>

        {/* 5) Top Courses Table */}
        <div className="row mt-4">
          <TopCoursesTable data={topCourses} loading={loadingCourses} />;
        </div>

        {/* 6) Recent Enrollments + Recent Reviews */}
        <div className="row mt-4">{/* <RecentPanels /> */}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
