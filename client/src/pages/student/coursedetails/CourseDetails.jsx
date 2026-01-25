import React, { useEffect, useState } from "react";
import "./CourseDetails.css";
import CourseHeader from "@/components/student/coursedetails/courseheader/CourseHeader";
import CoursePreview from "@/components/student/coursedetails/coursepreview/CoursePreview";
import ActionSection from "@/components/student/coursedetails/actionsection/ActionSection";
import { useLocation } from "react-router-dom";
import Loader from "@/components/shared/Loader";
import { getCourseById } from "@/services/courseService";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourseToWishlist,
  removeCourseFromWishlist,
} from "@/slices/wishlist/wishlistSlice";
import { addToWishlist, removeFromWishlist } from "@/services/wishlist";

const CourseDetails = () => {
  /* ---------- Routing ---------- */
  const location = useLocation();
  const { courseId } = location.state || {};

  const HARD_CODED_COURSE_ID = "9dd20574-1552-4981-ab78-fbdc7a9e936a";
  const finalCourseId = courseId || HARD_CODED_COURSE_ID;

  /* ---------- Redux ---------- */
  const dispatch = useDispatch();

  const wishlistCourseIds = useSelector(
    (state) => state.wishlist.value.courseIds,
  );

  /* ---------- Derived State ---------- */
  const isWishlisted = wishlistCourseIds.includes(finalCourseId);

  /* ---------- Local State ---------- */
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------- Effects ---------- */
  useEffect(() => {
    const fetchCourse = async () => {
      // if (!courseId) return;
      try {
        const courseData = await getCourseById(finalCourseId);
        setCourse(courseData);
      } catch (error) {
        console.error("Failed to fetch course details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [finalCourseId]);

  /* ---------- Wishlist Toggle ---------- */
  const handleWishlistToggle = async () => {
    if (!finalCourseId) return;

    if (isWishlisted) {
      const response = await removeFromWishlist(finalCourseId);
      if (response?.success) {
        dispatch(removeCourseFromWishlist(finalCourseId));
      }
    } else {
      const response = await addToWishlist(finalCourseId);
      if (response?.success) {
        dispatch(addCourseToWishlist(finalCourseId));
      }
    }
  };

  /* ---------- UI ---------- */
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
      <CourseHeader
        course={course}
        isWishlisted={isWishlisted}
        onWishlistToggle={handleWishlistToggle}
      />

      <div className="row mt-4 g-4">
        <div className="col-md-8">
          <CoursePreview course={course} />
        </div>

        <div className="col-md-4">
          <ActionSection course={course} />
        </div>
      </div>

      {/*  Commented For Testing Purpose Only  */}
      {/* Course Section */}
      {/* <CourseContent course={course} /> */}
      {/* Instructor Section */}
      {/* <InstructorSection course={course} /> */}
    </div>
  );
};

export default CourseDetails;
