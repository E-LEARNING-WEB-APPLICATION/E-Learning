import React from "react";
import "./CoursePreview.css";

const CoursePreview = ({ course, activeVideoUrl }) => {
  if (!course) return null;

  return (
    <div className="course-preview mb-4 mt-2">
      {/* ==== Video Section ==== */}
      <div className="video-wrapper border rounded-4 overflow-hidden shadow-sm">
        <video
          key={activeVideoUrl || course.courseIntroVideo} // 🔥 forces reload
          className="course-video"
          controls
          autoPlay
          controlsList="nodownload"
          preload="metadata"
          poster={course.courseThumbnail}
        >
          <source
            src={activeVideoUrl || course.courseIntroVideo}
            type="video/mp4"
          />
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
