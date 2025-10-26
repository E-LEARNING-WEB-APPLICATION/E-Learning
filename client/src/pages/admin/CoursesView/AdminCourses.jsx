import React, { useEffect, useState } from "react";
import GridView from "../../../components/admin/courses/GridView";
import TableView from "../../../components/admin/courses/TableView";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [view, setView] = useState("grid");

  const fetchCourses = () => {
    return [
      {
        course_id: "101",
        category: "software",
        instructor_name: "rohan",
        course_name: "React",
        course_desc: "react course",
        fees: 1000.0,
        discount_percentage: 0.4,
        course_thumbnail: "https://placehold.co/400",
        course_intro_video: "https://placehold.co/600x400",
        course_duration: "2 weeks",
      },
      {
        course_id: "102",
        category: "software",
        instructor_name: "ketan",
        course_name: "Cpp",
        course_desc: "cpp course",
        fees: 1000.0,
        discount_percentage: 0.3,
        course_thumbnail: "https://placehold.co/400",
        course_intro_video: "https://placehold.co/600x400",
        course_duration: "2 weeks",
      },
      {
        course_id: "104",
        category: "software",
        instructor_name: "ketan",
        course_name: "Cpp",
        course_desc: "cpp course",
        fees: 1000.0,
        discount_percentage: 0.3,
        course_thumbnail: "https://placehold.co/400",
        course_intro_video: "https://placehold.co/600x400",
        course_duration: "2 weeks",
      },
      {
        course_id: "103",
        category: "software",
        instructor_name: "ketan",
        course_name: "Cpp",
        course_desc: "cpp course",
        fees: 1000.0,
        discount_percentage: 0.3,
        course_thumbnail: "https://placehold.co/400",
        course_intro_video: "https://placehold.co/600x400",
        course_duration: "2 weeks",
      },
      {
        course_id: "105",
        category: "software",
        instructor_name: "ketan",
        course_name: "Cpp",
        course_desc: "cpp course",
        fees: 1000.0,
        discount_percentage: 0.3,
        course_thumbnail: "https://placehold.co/400",
        course_intro_video: "https://placehold.co/600x400",
        course_duration: "2 weeks",
      },
    ];
  };

  const handleViewToggle = () => {
    view == "grid" ? setView("table") : setView("grid");
  };

  useEffect(() => {
    setCourses(fetchCourses());
  }, []);

  return (
    <div>
      <div className="container text-center">
        <div className="d-flex mb-3">
          <h4>Courses</h4>
          <div className="btn-group ml-auto px-3">
            <button
              type="button"
              className={`btn btn-primary ${view == "grid" ? "active" : ""}`}
              onClick={()=>{handleViewToggle('grid')}}
            >
              grid
            </button>
            <button
              type="button"
              className={`btn btn-primary ${view == "table" ? "active" : ""}`}
              onClick={()=>{handleViewToggle('table')}}
            >
              table
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
