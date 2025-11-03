import React, { useState } from "react";
import "./MyCourses.css";
import { FaRegStarHalf, FaStar } from "react-icons/fa";

const MyCourses = () => {
  const [isPaid, setIsPaid] = useState(true);

  const courses = [
    {
      id: 1,
      category: "Web Development",
      title: "React Bootcamp",
      duration: "12 hours",
      fees: 1499,
      rating: 4.5,
      thumbnail: "https://picsum.photos/400/250?random=1",
    },
    {
      id: 2,
      category: "Java Programming",
      title: "Java Essentials",
      duration: "10 hours",
      fees: 0,
      rating: 4.8,
      thumbnail: "https://picsum.photos/400/250?random=2",
    },
    {
      id: 3,
      category: "Data Science",
      title: "Python for Data Analysis",
      duration: "14 hours",
      fees: 1999,
      rating: 4.7,
      thumbnail: "https://picsum.photos/400/250?random=3",
    },
    {
      id: 4,
      category: "Frontend",
      title: "Mastering HTML, CSS & JS",
      duration: "8 hours",
      fees: 0,
      rating: 4.6,
      thumbnail: "https://picsum.photos/400/250?random=4",
    },
    {
      id: 5,
      category: "Mobile Development",
      title: "Android App Development with Kotlin",
      duration: "16 hours",
      fees: 2499,
      rating: 4.9,
      thumbnail: "https://picsum.photos/400/250?random=5",
    },
    {
      id: 6,
      category: "Backend Development",
      title: "Node.js and Express Crash Course",
      duration: "11 hours",
      fees: 0,
      rating: 4.4,
      thumbnail: "https://picsum.photos/400/250?random=6",
    },
    {
      id: 7,
      category: "UI/UX Design",
      title: "Design Thinking Fundamentals",
      duration: "6 hours",
      fees: 999,
      rating: 4.3,
      thumbnail: "https://picsum.photos/400/250?random=7",
    },
    {
      id: 8,
      category: "Cloud Computing",
      title: "AWS Cloud Practitioner Certification Prep",
      duration: "18 hours",
      fees: 2999,
      rating: 4.8,
      thumbnail: "https://picsum.photos/400/250?random=8",
    },
    {
      id: 9,
      category: "Cyber Security",
      title: "Ethical Hacking for Beginners",
      duration: "15 hours",
      fees: 0,
      rating: 4.6,
      thumbnail: "https://picsum.photos/400/250?random=9",
    },
    {
      id: 10,
      category: "Machine Learning",
      title: "Intro to Machine Learning with Scikit-Learn",
      duration: "20 hours",
      fees: 2499,
      rating: 4.9,
      thumbnail: "https://picsum.photos/400/250?random=10",
    },
    {
      id: 11,
      category: "Database",
      title: "MySQL Masterclass: Beginner to Advanced",
      duration: "9 hours",
      fees: 899,
      rating: 4.5,
      thumbnail: "https://picsum.photos/400/250?random=11",
    },
    {
      id: 12,
      category: "DevOps",
      title: "Docker and Kubernetes Essentials",
      duration: "13 hours",
      fees: 0,
      rating: 4.7,
      thumbnail: "https://picsum.photos/400/250?random=12",
    },
  ];

  // 🔹 Filtering logic (for later use)
  const filteredCourses = courses.filter((course) =>
    isPaid ? course.fees > 0 : course.fees === 0
  );

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">
          👋 Hi <span className="text-primary">Swaraj</span>, here are your
          enrolled courses!
        </h2>
        <p className="text-secondary fs-5">
          Keep up the great learning streak! 🚀
        </p>
      </div>

      {/* 🔹 UPDATED SEARCH + TOGGLE SECTION */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
        {/* Search bar (reduced width) */}
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search courses by title..."
        />

        {/* Custom toggle switch */}
        <div
          className={`toggle-switch ${isPaid ? "paid" : "free"}`}
          onClick={() => setIsPaid(!isPaid)}
        >
          <div className="toggle-btn">{isPaid ? "Paid 💰" : "Free 🎓"}</div>
        </div>
      </div>
      {/* 🔹 END UPDATED SECTION */}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredCourses.map((course) => (
          <div className="col" key={course.id}>
            <div className="course-card">
              <img src={course.thumbnail} alt={course.title} />

              {/* Category and Fee badges */}
              <span className="badge-category">{course.category}</span>
              <span
                className={`badge-fee ${
                  course.fees === 0 ? "bg-success" : "bg-warning"
                }`}
              >
                {course.fees === 0 ? "Free" : `₹${course.fees}`}
              </span>

              {/* Info Overlay */}
              <div className="course-info">
                <h5 className="fw-bold">{course.title}</h5>

                <div className="d-flex justify-content-between align-items-center">
                  <small>{course.duration}</small>

                  <div className="rating d-flex align-items-center">
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaRegStarHalf className="text-warning" />
                    <span className="ms-1 small">{course.rating}</span>
                  </div>
                </div>

                <button className="btn btn-primary mt-3 fw-semibold w-100">
                  Start Learning →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
