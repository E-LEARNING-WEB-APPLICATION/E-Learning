import React from "react";
import CourseCard from "@/components/shared/InstructorCourseCard/CourseCard";

const GridView = ({ courses }) => {
  return (
    <div className="container py-5">
      <h3 className="mb-4 fw-bold text-primary">Instructor Courses</h3>
      <div className="container py-5">
        <div className="row g-4">
          {courses.map((course) => (
            <div
              key={course.courseId}
              className="col-12 col-sm-6 col-lg-3 d-flex"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridView;
