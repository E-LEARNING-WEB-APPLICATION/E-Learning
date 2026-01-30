import React, { useEffect, useState } from "react";
import "./Students.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchCoursesData } from "@/services/Instructor/addCourse";

function Students() {

  const [courses,setCourses] = useState([])

  useEffect(()=>
    {
      getCourseData()
    },[])

   async function getCourseData()
    {
      try
      {
          const response = await fetchCoursesData();
          setCourses(response.data)
      }
      catch(error)
      {
        console.log(error)
        toast.error("Error While Fetching Course Details")
      }
       
    }

  return (
    <div>
      {courses.map((course) => (
        <div className="card course-card mb-3 shadow-sm" key={course.id}>
        <Link
        to= { `/instructor/Students/${course.id}` }
        state={{ course }}
        className="text-decoration-none text-dark"
        >
          <div className="card-body">
            <div className="row align-items-center g-3">

              {/* LEFT SIDE */}
              <div className="col-12 col-md-6 d-flex align-items-center gap-3">
                <img
                  src={course.imageUrl}
                  className="course-image"
                  alt={course.courseName}
                />

                <div className="course-text">
                  <h5 className="mb-1 fw-semibold">{course.courseName}</h5>
                  <p className="mb-0 text-muted large">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              
                      <div className="col-12 col-md-6 text-md-end course-stats">
                          <h3 className="fw-bold text-primary mb-0">
                              {course.students}
                          </h3>
                          <span className="text-muted small">
                              Students Enrolled
                          </span>
                      </div>


            </div>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Students;
