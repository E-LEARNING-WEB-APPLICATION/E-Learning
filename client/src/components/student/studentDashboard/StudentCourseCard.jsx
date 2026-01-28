import { getCourseStatusById } from "@/services/courseService";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const StudentCourseCard = ({ course, page, showRemove = false, onRemove }) => {
  const pageType = typeof page === "string" ? page : page?.page;
  const navigate = useNavigate();

  const handleView = async () => {
    if (pageType === "guest") {
      toast.warn("Please Login to explore course");
      setTimeout(() => navigate("/guest/login"), 2000);
      return;
    }

    try {
      const response = await getCourseStatusById(course.id);

      if (!response.success) {
        navigate("/student/course-details", {
          state: { courseId: course.id },
        });
      } else {
        navigate("/student/enrolled-course-details", {
          state: { courseId: course.id },
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="col-md-3">
      <div className="card shadow-sm h-100">
        <img
          src={course.thumbnail}
          onError={(e) =>
            (e.target.src = "https://picsum.photos/seed/fallback/300/200")
          }
          className="card-img-top"
          alt={course.title}
          style={{ height: "150px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h6 className="fw-bold">{course.title}</h6>

          <p className="text-muted small mb-1">
            Total Hours : {course.duration}
          </p>

          <p className="text-warning mb-2">
            ⭐ {course.rating} ({course.reviews} reviews)
          </p>

          <p className="fw-bold text-primary">
            ₹{Math.round(course.fees * ((100 - course.discount) / 100))}
            {course.discount > 0 && (
              <span className="text-muted text-decoration-line-through ms-2">
                ₹{course.fees}
              </span>
            )}
          </p>

          <div className="mt-auto d-flex gap-2">
            <button className="btn btn-primary w-100" onClick={handleView}>
              View Course
            </button>

            {showRemove && (
              <button
                className="btn btn-outline-danger"
                onClick={() => onRemove(course.id)}
              >
                <FaTrash />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCourseCard;
