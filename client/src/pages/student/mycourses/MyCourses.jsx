import React, { useEffect, useState } from "react";
import "./MyCourses.css";
import { FaRegStarHalf, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "@/components/shared/Loader";
import { getEnrolledCourses } from "@/services/courseService";

const MyCourses = () => {
  const [isPaid, setIsPaid] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchEnrolledCourses = async () => {
    setLoading(true);
    const data = await getEnrolledCourses();

    if (Array.isArray(data)) {
      console.log(data);
      setEnrolledCourses(data);
    } else {
      setEnrolledCourses([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const handleNavigate = (courseId) => {
    navigate("/student/enrolled-course-details", {
      state: { courseId },
    });
  };

  const filteredCourses = enrolledCourses.filter((course) => {
  const title = course.courseTitle || "";

  const matchesSearch = title
    .toLowerCase()
    .includes(searchTerm);

  const matchesToggle = isPaid
    ? course.coursePrice > 0
    : course.coursePrice === 0;

  return matchesSearch && matchesToggle;
});


  if (loading) {
    return (
      <Loader
        text="Fetching your enrolled courses..."
        size={36}
      />
    );
  }

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
                <img
                  src={course.courseThumbnail}
                  alt={course.courseTitle}
                />

                <span className="badge-category">
                  {course.categoryName}
                </span>
                <span
                  className={`badge-fee ${
                    course.coursePrice === 0
                      ? "bg-success"
                      : "bg-warning"
                  }`}
                >
                  {course.coursePrice === 0
                    ? "Free"
                    : `₹${course.coursePrice}`}
                </span>

                <div className="course-info">
                  <h5 className="fw-bold">
                    {course.courseTitle}
                  </h5>

                  <div className="d-flex justify-content-between align-items-center">
                    <small>{course.courseDuration}</small>

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
                      handleNavigate(course.courseId);
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
