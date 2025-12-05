import { getCourseById } from "@/api/api";
import Loader from "@/components/shared/Loader";
import CourseHeader from "@/components/student/coursedetails/courseheader/CourseHeader";
import CoursePreview from "@/components/student/coursedetails/coursepreview/CoursePreview";
import InstructorSection from "@/components/student/coursedetails/instructorsection/InstructorSection";
import CourseContentSidebar from "@/components/student/enrolledcoursedetails/coursecontentsidebar/CourseContentSidebar";
import CourseTabs from "@/components/student/enrolledcoursedetails/coursetabs/CourseTabs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CourseEnrolledPage = () => {
  const location = useLocation();

  const { courseId } = location.state || {};

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseId) return;
      try {
        const courseData = await getCourseById(courseId);
        setCourse(courseData);
      } catch (error) {
        console.error("Failed to fetch course details:", error);
      } finally {
        setLoading(false); // Stop loader once done
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <Loader text="Fetching Course Details..." size={40} color="#0d6efd" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container text-center mt-5">
        <h4 className="text-danger fw-semibold">Course not found 😕</h4>
        <p className="text-muted">
          Please check the course link or try again later.
        </p>
      </div>
    );
  }

  return (
    <div
      className="course-details-page container-fluid mt-3"
      style={{ backgroundColor: "#fff", paddingLeft: "25px" }}
    >
      {/* Main Layout */}
      <div className="row g-4">
        {/* Left: Course Preview and Details */}
        <div className="col-md-8">
          <CourseHeader course={course} />
          <CoursePreview course={course} />
          <CourseTabs course={course} />
          <InstructorSection course={course} />
        </div>

        {/* Right: Course Content Section */}
        <div className="col-md-4 mt-3">
          <CourseContentSidebar course={course} />
        </div>
      </div>
    </div>
  );
};

export default CourseEnrolledPage;
