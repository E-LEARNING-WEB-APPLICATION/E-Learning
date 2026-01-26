import "./Dashboard.css";
import StudentDashboardCategoryCourse from "@/components/student/studentDashboard/StudentDashboardCategoryCourse";
import StudentDashboardCategorySection from "@/components/student/studentDashboard/StudentDashboardCategorySection";
import StudentDashboardHeroSection from "@/components/student/studentDashboard/StudentDashboardHeroSection";
import StudentDashboardInstructor from "@/components/student/studentDashboard/StudentDashboardInstructor";
import StudentDashboardTestimonials from "@/components/student/studentDashboard/StudentDashboardTestimonials";
import StudentDashboardTopCourses from "@/components/student/studentDashboard/StudentDashboardTopCourses";
import { fetchCategoriesNormalized } from "@/services/admin/categoryService";
import { getAllDashboardCourses } from "@/services/courseService";
import { getAllInstructor } from "@/services/instructorDetails";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
    const [category, setCategory] = useState([]);
    const [course, setCourse] = useState([]);
    const [instructor, setInstructor] = useState({
        id: "",
        name: "",
        title: "",
        speciality: [],
        courses: 0,
        student: 0,
        image: "",
        email: "",
        gitHub: "",
        linkedIn: "",
        twitter: "",
    });

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const data = await fetchCategoriesNormalized();
                console.log(data);
                setCategory(data);
            } catch (error) {
                toast.error(error.message);
            }
        };
        const fetchCourses = async () => {
            try {
                const data = await getAllDashboardCourses();
                console.log(data);
                setCourse(data);
            } catch (error) {
                toast.error(error.message);
            }
        };

        const fetchInstructor = async () => {
            try {
                const data = await getAllInstructor();
                setInstructor(data);
                console.log(data);
            } catch (error) {
                toast.error(error.message);
            }
        };

        fetchCourses();
        fetchCategory();
        fetchInstructor();
    }, []);
    const sampleTestimonials = [
        {
            id: 1,
            name: "Aarav Sharma",
            course: "React for Beginners",
            review: "The course was extremely well structured and easy to follow. The instructor explained concepts clearly and the projects were very practical!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
            id: 2,
            name: "Riya Sen",
            course: "Data Science Fundamentals",
            review: "Amazing content! The instructor made complex data topics very simple. The hands-on exercises were the best part!",
            rating: 4,
            image: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        {
            id: 3,
            name: "Kunal Patil",
            course: "Android Development with Kotlin",
            review: "Best Android course I have taken! Very clear explanations and well-structured modules. Highly recommended.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/20.jpg",
        },
        {
            id: 4,
            name: "Sneha Kapoor",
            course: "UI/UX Design Essentials",
            review: "Loved the creative examples and Figma practice tasks. The instructor made UI/UX very fun to learn!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/55.jpg",
        },
    ];

    return (
        <div>
            <StudentDashboardHeroSection courses={course} />
            <StudentDashboardCategorySection categories={category} />
            <StudentDashboardTopCourses courses={course} />
            <StudentDashboardCategoryCourse
                courses={course}
                categories={category}
            />
            <StudentDashboardInstructor instructors={instructor} />
            <StudentDashboardTestimonials
                sampleTestimonials={sampleTestimonials}
            />
        </div>
    );
};

export default Dashboard;
