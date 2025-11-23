import React from "react";
import "./CoursePreview.css";

const CoursePreview = ({ course }) => {
  if (!course) return null;

  // Prefer dynamic video URL if available, fallback to default
  const videoUrl =
    "https://raw.githubusercontent.com/gandhiomkar/testrepository/main/JavaScript%20for%20the%20Haters.mp4";

  return (
    <div className="course-preview mb-4">
      {/* ==== Video Section ==== */}
      <div className="video-wrapper border rounded-4 overflow-hidden shadow-sm">
        <video
          className="course-video"
          controls
          controlsList="nodownload" // ✅ hides the download button
          preload="metadata" // loads only metadata initially
          poster="https://i.ibb.co/nmhsQdy/thumbnail.jpg" // optional thumbnail
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ==== Description Section ==== */}
      <div className="mt-3">
        <h5 className="fw-bold">About this course</h5>
        <p className="text-muted">{course?.[0]?.course_desc}</p>
      </div>
    </div>
  );
};

export default CoursePreview;
