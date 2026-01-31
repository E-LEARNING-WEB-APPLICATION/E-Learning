import { fetchCategoriesNormalized } from "@/services/admin/categoryService";
import { fetchCourses, getCourseStatusById } from "@/services/courseService";
import React, { useEffect, useState } from "react";
import "./ExploreCourse.css";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ExploreCourse = () => {
    const location = useLocation();
    const pageType = location.state?.page; // "guest" | undefined
    const navigate = useNavigate();

    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);

    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [categoryId, setCategoryId] = useState("");

    /* Fetch Courses */
    useEffect(() => {
        const fetchCourse = async () => {
            const courseData = await fetchCourses(
                page,
                search,
                sortBy,
                categoryId,
            );
            console.log(courseData);
            setCourses(courseData.data.content);
            setTotalPages(courseData.data.totalPages);
        };

        fetchCourse();
    }, [page, search, sortBy, categoryId]);

    /* Fetch Categories */
    useEffect(() => {
        const fetchCategory = async () => {
            const categoryData = await fetchCategoriesNormalized();
            setCategories(categoryData.data);
        };

        fetchCategory();
    }, []);

    const handleView = async (course) => {
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
        <div className="explore-container">
            {/* Heading */}
            <h1 className="explore-title">Explore Courses</h1>

            {/* Filters */}
            <div className="filters">
                {/* Search */}
                <div className="filter-group search-group">
                    <label>Search</label>
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={search}
                        onChange={(e) => {
                            setPage(0);
                            setSearch(e.target.value);
                        }}
                    />
                </div>

                {/* Sort */}
                <div className="filter-group">
                    <label>Sort by</label>
                    <select
                        value={sortBy}
                        onChange={(e) => {
                            setPage(0);
                            setSortBy(e.target.value);
                        }}>
                        <option value="">Recommended</option>
                        <option value="price_low_high">
                            Price: Low → High
                        </option>
                        <option value="price_high_low">
                            Price: High → Low
                        </option>
                        <option value="discount_high_low">
                            Discount: High → Low
                        </option>
                        <option value="name_asc">Name: A → Z</option>
                        <option value="name_desc">Name: Z → A</option>
                        <option value="rating_high_low">
                            Rating: High → Low
                        </option>
                        <option value="reviews_high_low">
                            Reviews: High → Low
                        </option>
                    </select>
                </div>

                {/* Category */}
                <div className="filter-group">
                    <label>Category</label>
                    <select
                        value={categoryId}
                        onChange={(e) => {
                            setPage(0);
                            setCategoryId(e.target.value);
                        }}>
                        <option value="">All Categories</option>
                        {categories.map((cat) => (
                            <option
                                key={cat.id}
                                value={cat.id}>
                                {cat.title}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Course Grid */}
            <div className="course-grid">
                {" "}
                {courses.map((course) => {
                    const discountedPrice =
                        course.fees - (course.fees * course.discount) / 100;
                    return (
                        <div
                            onClick={() => {
                                handleView(course);
                            }}
                            key={course.id}
                            className="course-card">
                            {" "}
                            <img
                                src={course.thumbnail}
                                alt={course.title}
                                className="course-image"
                            />{" "}
                            <div className="course-info">
                                {" "}
                                <h3>{course.title}</h3>{" "}
                                <p className="meta">
                                    {" "}
                                    ⭐ {course.rating} ({course.reviews}{" "}
                                    reviews){" "}
                                </p>{" "}
                                <p className="meta">
                                    {" "}
                                    ⏱ {course.duration} hours{" "}
                                </p>{" "}
                                <div className="price">
                                    {" "}
                                    {course.discount > 0 && (
                                        <span className="original-price">
                                            {" "}
                                            ₹{course.fees}{" "}
                                        </span>
                                    )}{" "}
                                    <span className="discounted-price">
                                        {" "}
                                        ₹{discountedPrice.toFixed(2)}{" "}
                                    </span>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>
                    );
                })}{" "}
            </div>

            {/* Pagination */}
            <div className="pagination">
                {/* Previous */}
                <button
                    className="nav-btn"
                    disabled={page === 0}
                    onClick={() => {
                        if (page > 0) setPage(page - 1);
                    }}>
                    ‹
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        className={`page-btn ${i === page ? "active" : ""}`}
                        onClick={() => setPage(i)}>
                        {i + 1}
                    </button>
                ))}

                {/* Next */}
                <button
                    className="nav-btn"
                    disabled={page === totalPages - 1}
                    onClick={() => {
                        if (page < totalPages - 1) setPage(page + 1);
                    }}>
                    ›
                </button>
            </div>
        </div>
    );
};

export default ExploreCourse;
