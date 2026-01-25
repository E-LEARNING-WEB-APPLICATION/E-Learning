import CourseSortDropdown from "@/components/shared/CourseFilterDropdown/CourseSortDropdown";
import CourseSearchBar from "@/components/shared/CourseSearchBar/CourseSearchBar";
import StudentCourseCard from "@/components/student/studentDashboard/StudentCourseCard";
import { getCoursesByCategory } from "@/services/courseService";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CategoryCourses = () => {
    const { categoryId } = useParams();
    const { state } = useLocation();

    const categoryName = state?.categoryName;
    const [courses, setCourses] = useState([]);

    const [categoryCourses, setCategoryCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        const fetchCourseByCategory = async () => {
            try {
                const data = await getCoursesByCategory(categoryId);
                console.log(data);
                setCourses(data);
                setCategoryCourses(data);
            } catch (error) {
                toast.error(error.message);
            }
        };

        fetchCourseByCategory();
    }, []);

    const handleSort = (e) => {
        const value = e.target.value;
        setSortBy(value);

        switch (value) {
            case "":
                setCategoryCourses(courses);
                break;
            case "price_low_high":
                setCategoryCourses(
                    categoryCourses.sort((a, b) => a.fees - b.fees),
                );
                break;
            case "price_high_low":
                setCategoryCourses(
                    categoryCourses.sort((a, b) => b.fees - a.fees),
                );
                break;
            case "discount_high_low":
                setCategoryCourses(
                    categoryCourses.sort((a, b) => b.discount - a.discount),
                );
                break;
            case "name_asc":
                setCategoryCourses(
                    categoryCourses.sort((a, b) =>
                        a.title.localeCompare(b.title),
                    ),
                );
                break;
            case "name_desc":
                setCategoryCourses(
                    categoryCourses.sort((a, b) =>
                        b.title.localeCompare(a.title),
                    ),
                );
                break;
            case "rating_high_low":
                setCategoryCourses(
                    categoryCourses.sort((a, b) => b.rating - a.rating),
                );
                break;
            case "reviews_high_low":
                setCategoryCourses(
                    categoryCourses.sort((a, b) => b.reviews - a.reviews),
                );
                break;
            default:
                setCategoryCourses(courses);
                break;
        }
    };
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        console.log(e.target.value);
        console.log(value);

        if (value != "") {
            setCategoryCourses(
                courses.filter((a) =>
                    a.title.toLowerCase().includes(value.toLowerCase()),
                ),
            );
        } else {
            setCategoryCourses(courses);
        }
    };

    console.log(categoryCourses);
    return (
        <div className="container py-5">
            {/* Header */}
            <h2 className="fw-bold mb-4">
                Courses in <span className="text-primary">{categoryName}</span>
            </h2>
            <div className="d-flex gap-3 mb-4 flex-wrap">
                <CourseSearchBar
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <CourseSortDropdown
                    value={sortBy}
                    onChange={handleSort}
                />
            </div>

            {/* Courses Grid */}
            <div className="row g-4">
                {categoryCourses.length > 0 ? (
                    categoryCourses.map((course) => (
                        <StudentCourseCard course={course} />
                    ))
                ) : (
                    <p>No courses available for this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryCourses;
