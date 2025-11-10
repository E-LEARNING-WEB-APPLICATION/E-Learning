import React, { useEffect, useState } from "react";
import "./CourseDetails.css";
import CourseHeader from "@/components/student/coursedetails/courseheader/CourseHeader";
import CoursePreview from "@/components/student/coursedetails/coursepreview/CoursePreview";
import ActionSection from "@/components/student/coursedetails/actionsection/ActionSection";
import CourseContent from "@/components/student/coursedetails/coursecontent/CourseContent";
import InstructorSection from "@/components/student/coursedetails/instructorsection/InstructorSection";
import { useLocation } from "react-router-dom";
import { getCourseById } from "@/api/api";
import Loader from "@/components/shared/Loader";

const CourseDetails = () => {
  const location = useLocation();
  const { courseId } = location.state || {};
  console.log(courseId);
  console.log(location.state);

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
    <div className="course-details-page container my-4">
      <CourseHeader course={course} />

      {/* Main Layout */}
      <div className="row mt-4 g-4">
        {/* Left: Course Preview */}
        <div className="col-md-8">
          <CoursePreview course={course} />
        </div>

        {/* Right: Action Section */}
        <div className="col-md-4">
          <ActionSection course={course} />
        </div>
      </div>

      {/* Course Section */}
      <CourseContent />
      {/* Instructor Section */}
      <InstructorSection />
    </div>
  );
};

export default CourseDetails;
