import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../../footer/Footer";
import StudentNavbar from "../navbar/StudentNavbar";

const StudentLayout = () => {
  const token = localStorage.getItem("token");
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
