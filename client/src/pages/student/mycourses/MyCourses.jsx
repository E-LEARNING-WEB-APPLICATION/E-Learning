import React, { useEffect, useState } from "react";
import "./MyCourses.css";
import { FaRegStarHalf, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAllCourses } from "@/api/api";

const MyCourses = () => {
  const [isPaid, setIsPaid] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCourses = async () => {
    const data = await getAllCourses();
    if (data) {
      setEnrolledCourses(data.courses);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const navigate = useNavigate();

  const handleNavigate = (course) => {
    console.log(course);
    navigate("/student/course-details/", {
      state: { courseId: course.courseId },
    });
  };

  const filteredCourses = enrolledCourses.filter(
    (course) =>
      (isPaid ? course.fees > 0 : course.fees === 0) &&
      course.course_name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">
          👋 Hi <span className="text-primary">Swaraj</span>, here are your
          enrolled courses!
        </h2>
        <p className="text-secondary fs-5">
          Keep up the great learning streak! 🚀
        </p>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search courses by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />

        <div
          className={`toggle-switch ${isPaid ? "paid" : "free"}`}
          onClick={() => setIsPaid(!isPaid)}
        >
          <div className="toggle-btn">{isPaid ? "Paid 💰" : "Free 🎓"}</div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div className="col" key={course.courseId}>
              <div className="course-card">
                <img src={course.course_thumbnail} alt={course.course_name} />

                <span className="badge-category">{course.category}</span>
                <span
                  className={`badge-fee ${
                    course.fees === 0 ? "bg-success" : "bg-warning"
                  }`}
                >
                  {course.fees === 0 ? "Free" : `₹${course.fees}`}
                </span>

                <div className="course-info">
                  <h5 className="fw-bold">{course.course_name}</h5>

                  <div className="d-flex justify-content-between align-items-center">
                    <small>{course.course_duration}</small>

                    <div className="rating d-flex align-items-center">
                      <FaStar className="text-warning me-1" />
                      <FaStar className="text-warning me-1" />
                      <FaStar className="text-warning me-1" />
                      <FaStar className="text-warning me-1" />
                      <FaRegStarHalf className="text-warning" />
                      <span className="ms-1 small">{course.rating}</span>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary mt-3 fw-semibold w-100"
                    onClick={() => {
                      handleNavigate(course);
                    }}
                  >
                    Start Learning →
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted mt-5">
            <h5>No courses found 🔍</h5>
            <p>Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
