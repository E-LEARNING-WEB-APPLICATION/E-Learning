import React from "react";
import "./CoursePreview.css";

const CoursePreview = ({ course }) => {
  if (!course) return null;
  return (
    <div className="course-preview mb-4">
      <div className="video-wrapper border rounded overflow-hidden">
        <iframe
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/Ke90Tje7VS0"
          title="React Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-3">
        <h5 className="fw-bold">About this course</h5>
        <p className="text-muted">{course[0].course_desc}</p>
      </div>
    </div>
  );
};

export default CoursePreview;
