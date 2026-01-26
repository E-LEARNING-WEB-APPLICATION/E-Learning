import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../AddedCourses/AddedCourses.css";

import { fetchAddedCourses } from "@/services/Instructor/courseService";

function AddedCourses() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  /* =========================
     FETCH COURSES
     ========================= */
  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    setLoading(true);

    const res = await fetchAddedCourses();

    /*
      Expected shape:
      {
        success: boolean,
        data: Course[]
      }
    */
    if (res?.success) {
      setCourses(res.data || []);
    } else {
      toast.error(res?.message || "Failed to fetch courses");
    }

    setLoading(false);
  };

  /* =========================
     NAVIGATION
     ========================= */
  const goToAddSection = (course) => {
    navigate("add-section", {
      state: { courseData: course },
    });
  };

  const handleShowSections = (course) => {
    navigate("show-sections", {
      state: { courseData: course },
    });
  };

  return (
    <div className="container added-courses-page">
      <h1 className="page-heading">My Courses</h1>

      {loading && <p className="text-center">Loading courses...</p>}

      {!loading && courses.length === 0 && (
        <p className="text-center text-muted">
          You haven’t added any courses yet.
        </p>
      )}

      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course.courseId}>
            <div className="card course-card h-100">
              <img
                className="card-img-top"
                src={course.thumbnail || "/placeholder-course.png"}
                alt={course.title}
                height="180"
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text text-muted">
                  {course.description || "No description provided"}
                </p>

                <div className="mt-auto">
                  <button
                    className="btn btn-outline-primary w-100 mb-2"
                    onClick={() => handleShowSections(course)}
                  >
                    Show Sections
                  </button>

                  <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={() => goToAddSection(course)}
                  >
                    Add Section
                  </button>

                  <button
                    className="btn btn-outline-secondary w-100 mb-2"
                    disabled
                  >
                    Edit Course
                  </button>

                  <button className="btn btn-success w-100" disabled>
                    Publish Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddedCourses;
