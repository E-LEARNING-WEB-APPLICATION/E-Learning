import { getInstructorCourses } from "@/api/api";
import CourseCard from "@/components/shared/InstructorCourseCard/CourseCard";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const InstructorCourses = () => {
  const [instructorCourses, setInstructorCourses] = useState([]);
  const location = useLocation();
  const id = location.state;

  useEffect(() => {
    getInstructorCourses(id).then((data) => setInstructorCourses(data));
  }, [id]);

  return (
    <div className="container py-5">
      <h3 className="mb-4 fw-bold text-primary">Instructor Courses</h3>
      <div className="container py-5">
        <div className="row g-4">
          {instructorCourses.map((course) => (
            <div key={course.courseId} className="col-12 col-sm-6 col-lg-3 d-flex">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorCourses;
