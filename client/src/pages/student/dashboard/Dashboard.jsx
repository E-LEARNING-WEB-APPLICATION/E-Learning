import "./Dashboard.css";
import StudentDashboardCategoryCourse from "@/components/student/studentDashboard/StudentDashboardCategoryCourse";
import StudentDashboardCategorySection from "@/components/student/studentDashboard/StudentDashboardCategorySection";
import StudentDashboardHeroSection from "@/components/student/studentDashboard/StudentDashboardHeroSection";
import StudentDashboardInstructor from "@/components/student/studentDashboard/StudentDashboardInstructor";
import StudentDashboardTestimonials from "@/components/student/studentDashboard/StudentDashboardTestimonials";
import StudentDashboardTopCourses from "@/components/student/studentDashboard/StudentDashboardTopCourses";
import { fetchCategoriesNormalized } from "@/services/admin/categoryService";
import { getAllDashboardCourses } from "@/services/courseService";
import React, { useEffect, useState } from "react";
import {
    FaCode,
    FaChartBar,
    FaMobileAlt,
    FaTerminal,
    FaTools,
    FaNetworkWired,
    FaDatabase,
    FaRobot,
    FaPaintBrush,
    FaCloud,
    FaBug,
    FaShieldAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Dashboard = () => {

    const instructors = [
        {
            id: 101,
            name: "Rohan Patil",
            title: "Senior Frontend Developer & Instructor",
            specialty: "HTML, CSS, JavaScript",
            courses: 3,
            students: 12500,
            image: "/images/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg",
            email: "rohan@sunbeam.com",
            socials: {
                linkedin: "https://linkedin.com/in/rohanpatil",
                twitter: "https://twitter.com/rohanpatil",
                github: "https://github.com/rohanpatil",
            },
        },
        {
            id: 102,
            name: "Ketan Deshmukh",
            title: "Full Stack Developer & Mentor",
            specialty: "JavaScript, Node.js, Android",
            courses: 3,
            students: 9800,
            image: "/images/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg",
            email: "ketan@sunbeam.com",
            socials: {
                linkedin: "https://linkedin.com/in/ketandeshmukh",
                twitter: "https://twitter.com/ketandeshmukh",
                github: "https://github.com/ketandeshmukh",
            },
        },
        {
            id: 103,
            name: "Sameer Kulkarni",
            title: "Professor & Data Science Expert",
            specialty: "Data Analytics, Machine Learning",
            courses: 4,
            students: 15400,
            image: "/images/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg",
            email: "sameer@sunbeam.com",
            socials: {
                linkedin: "https://linkedin.com/in/sameerkulkarni",
                twitter: "https://twitter.com/sameerkulkarni",
                github: "https://github.com/sameerkulkarni",
            },
        },
        {
            id: 104,
            name: "Amit Joshi",
            title: "UI/UX Designer & Visual Experience Creator",
            specialty: "UI/UX, Figma, Design Thinking",
            courses: 2,
            students: 5200,
            image: "/images/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg",
            email: "amit@sunbeam.com",
            socials: {
                linkedin: "https://linkedin.com/in/amitjoshi",
                twitter: "https://twitter.com/amitjoshi",
                github: "https://github.com/amitjoshi",
            },
        },
    ];


    const [category, setCategory] = useState([]);
    const [course, setCourse] = useState([]);
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
        }
        
        fetchCourses();
        fetchCategory();
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
            <StudentDashboardInstructor
                instructors={instructors}
            />
            <StudentDashboardTestimonials
                sampleTestimonials={sampleTestimonials}
            />
        </div>
    );
};

export default Dashboard;
