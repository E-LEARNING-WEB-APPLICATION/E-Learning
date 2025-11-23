import React, { useEffect, useState } from "react";
import GridView from "@/components/admin/courses/GridView";
import TableView from "@/components/admin/courses/TableView";
import { LuTableOfContents } from "react-icons/lu";
import { CiGrid41 } from "react-icons/ci";
import { getAllCourses } from "@/api/api";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [view, setView] = useState("grid");

  const handleViewToggle = (view) => {
    view === "grid" ? setView("grid") : setView("table");
  };

  useEffect(() => {
    getAllCourses().then(({ courses }) => setCourses(courses));
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
        {view == "grid" && <GridView courses={courses} />}
        {view == "table" && <TableView courses={courses} />}
      </div>
    </div>
  );
};

export default AdminCourses;
