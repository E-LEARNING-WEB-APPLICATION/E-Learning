import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../../footer/Footer";
import StudentNavbar from "../navbar/StudentNavbar";
import { getToken } from "@/utils/auth";

const StudentLayout = () => {
  const token = getToken();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/guest/login" replace state={{ from: location }} />;
  }
  return (
    <div>
      <StudentNavbar />
      <main className="container-fluid mt-0 p-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default StudentLayout;
