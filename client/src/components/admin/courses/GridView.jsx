import React from "react";
import AdminCourseCard from "./AdminCourseCard";

const GridView = ({ courses }) => {
  return (
    <div className="container py-5">
      <div className="container py-5">
        <div className="row g-4">
          {courses.map((course) => (
            <div
              key={course.courseId}
              className="col-12 col-sm-6 col-lg-3 d-flex"
            >
              <AdminCourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridView;
