// import EnrollmentAndGrowth from "@/components/admin/molecules/EnrollmentAndGrowth";
import KPISection from "@/components/admin/molecules/KPISection";
import RecentActivity from "@/components/admin/molecules/RecentActivity";
import RevenueAndCategory from "@/components/admin/molecules/RevenueAndCategory";
import TopCoursesTable from "@/components/admin/molecules/TopCoursesTable";
import React from "react";

const AdminDashboard = () => {
  return (
    <div>
              <div>
          <h3 className="mb-4 fw-bold text-primary">Welcome Admin</h3>
        </div>
      <div className="container-fluid dashboard-container">
        <KPISection />

        <div className="row mt-4">
          <RevenueAndCategory />
        </div>

        <div className="row mt-4">
          {/* <EnrollmentAndGrowth /> */}
        </div>

        <div className="row mt-4">
          <TopCoursesTable />
        </div>

        <div className="row mt-4">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
