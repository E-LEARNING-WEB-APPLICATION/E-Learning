import React from "react";
import "./CoursePreview.css";

const CoursePreview = ({ course }) => {
  if (!course) return null;

  return (
    <div className="course-preview mb-4 mt-2">
      {/* ==== Video Section ==== */}
      <div className="video-wrapper border rounded-4 overflow-hidden shadow-sm">
        <video
          className="course-video"
          controls
          controlsList="nodownload" //  hides the download button
          preload="metadata" // loads only metadata initially
          poster={course.courseThumbnail} // optional thumbnail
        >
          <source src={course.courseIntroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ==== Description Section ==== */}
      <div className="mt-3">
        <h5 className="fw-bold">About this course</h5>
        <p className="text-muted">{course?.courseDesc}</p>
      </div>
    </div>
  );
};

export default CoursePreview;
