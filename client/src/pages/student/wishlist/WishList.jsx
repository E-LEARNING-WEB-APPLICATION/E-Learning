import React, { useEffect, useState } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
import "./WishList.css";
import { useDispatch } from "react-redux";
import { getWishlist, removeFromWishlist } from "@/services/wishlist";
import { removeCourseFromWishlist } from "@/slices/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import Loader from "@/components/shared/Loader";

const WishList = () => {
  const [wishlistCourses, setWishlistCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  /* ---------- Fetch Wishlist ---------- */
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

  /* ---------- Remove from Wishlist ---------- */
  const handleRemove = async (courseId) => {
    const response = await removeFromWishlist(courseId);

    if (response?.success) {
      // Update UI
      setWishlistCourses((prev) =>
        prev.filter((course) => course.courseId !== courseId),
      );

      // Update Redux (count + ids)
      dispatch(removeCourseFromWishlist(courseId));

      toast.success("Removed from wishlist");
    }
  };

  /* ---------- Loading ---------- */
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

  /* ---------- Empty State ---------- */
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
    <div className="wishlist-container container py-5">
      <h2
        className="text-center mb-4 wishlist-title"
        style={{ textDecoration: "underline" }}
      >
        <FaHeart className="me-2 text-danger" /> My Wishlist
      </h2>

      <div className="row g-4">
        {wishlistCourses.map((course) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={course.courseId}
          >
            <div className="card wishlist-card shadow-sm h-100">
              <img
                className="card-img-top"
                src={course.thumbnail}
                alt={course.title}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold">{course.title}</h5>

                <div className="mt-auto">
                  {/* Description */}
                  <p className="card-text text-muted small mb-2">
                    {course.desc}
                  </p>

                  {/* Price + Remove */}
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold fs-6 text-primary">
                      ₹{course.fees}
                    </span>

                    <button
                      className="btn btn-outline-danger btn-sm d-flex align-items-center"
                      onClick={() => handleRemove(course.courseId)}
                    >
                      <FaTrash className="me-2" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
