import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getWishlist, removeFromWishlist } from "@/services/wishlist";
import { removeCourseFromWishlist } from "@/slices/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import Loader from "@/components/shared/Loader";
import StudentCourseCard from "@/components/student/studentDashboard/StudentCourseCard";

const WishList = () => {
  const [wishlistCourses, setWishlistCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await getWishlist();
        setWishlistCourses(response || []);
      } catch (error) {
        console.error("Failed to load wishlist", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  const handleRemove = async (courseId) => {
    const response = await removeFromWishlist(courseId);

    if (response?.success) {
      setWishlistCourses((prev) =>
        prev.filter((course) => course.courseId !== courseId),
      );

      dispatch(removeCourseFromWishlist(courseId));
      toast.success("Removed from wishlist");
    }
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <Loader text="Loading Wishlist..." size={40} color="#dc3545" />
      </div>
    );
  }

  if (wishlistCourses.length === 0) {
    return (
      <div className="container text-center py-5">
        <FaHeart className="text-danger fs-1 mb-3" />
        <h4>Your wishlist is empty</h4>
        <p className="text-muted">
          Explore courses and add them to your wishlist ❤️
        </p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">
        <FaHeart className="me-2 text-danger" /> My Wishlist
      </h2>

      <div className="row g-4">
        {wishlistCourses.map((course) => (
          <StudentCourseCard
            key={course.courseId}
            course={{
              ...course,
              id: course.courseId, // normalize id
            }}
            page="wishlist"
            showRemove
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default WishList;
