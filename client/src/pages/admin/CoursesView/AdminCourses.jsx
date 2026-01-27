import React, { useEffect, useState } from "react";
import TableView from "@/components/admin/courses/TableView";
import { LuTableOfContents } from "react-icons/lu";
import { CiGrid41 } from "react-icons/ci";
import { fetchCourseOverviewData } from "@/services/admin/courseStatisticsService";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [view, setView] = useState("table");

  const handleViewToggle = (view) => {
    view === "grid" ? setView("grid") : setView("table");
  };

  const getAllCourseOverview = async () => {
    fetchCourseOverviewData().then((data) => {
      console.log(data);
      setCourses(data.content);
    });
  };

  useEffect(() => {
    // getAllCourses().then(({ courses }) => setCourses(courses));
    getAllCourseOverview();
  }, []);

  return (
    <div>
      <div className="container text-center">
        <div className="d-flex mb-3 justify-content-between align-items-center">
          <h4>Courses</h4>
          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-primary ${view == "grid" ? "active" : ""}`}
              onClick={() => {
                handleViewToggle("grid");
              }}
            >
              <CiGrid41 />
            </button>
            <button
              type="button"
              className={`btn btn-primary ${view == "table" ? "active" : ""}`}
              onClick={() => {
                handleViewToggle("table");
              }}
            >
              <LuTableOfContents />
            </button>
          </div>
        </div>
        <div>
          <h3 className="mb-4 fw-bold text-primary">All Courses</h3>
        </div>
        {/* {view == "grid" && <GridView courses={courses} />} */}
        {view == "table" && <TableView courses={courses} />}
      </div>
    </div>
  );
};

export default AdminCourses;
