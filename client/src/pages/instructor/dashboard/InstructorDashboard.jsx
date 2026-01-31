import "./InstructorDashboard.css";
import InstructorDashboardReviewTable from "./../../../components/instructor/dashboard/InstructorDashboardReviewTable";
import InstructorDashboardCategoryGraph from "./../../../components/instructor/dashboard/InstructorDashboardCategoryGraph";
import InstructorDashboardCourseGraph from "./../../../components/instructor/dashboard/InstructorDashboardCourseGraph";
import InstructorDashboardWallet from "./../../../components/instructor/dashboard/InstructorDashboardWallet";
import InstructorDashboardStatCards from "@/components/instructor/dashboard/InstructorDashboardStatCards";
import InstructorDashboardHeader from "@/components/instructor/dashboard/InstructorDashboardHeader";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
    fetchCoursePerCategory,
    fetchDashboardStat,
    fetchStudentPerCourse,
} from "@/services/Instructor/dashboardService";
import Loader from "@/components/shared/Loader";

/**
 * STAT_CONFIG
 * -----------
 * This configuration drives the Instructor Dashboard statistic cards.
 *
 * Each object in this array represents ONE stat card on the dashboard.
 * The UI does NOT hardcode any values — instead, it maps backend data
 * to cards using this config as the single source of truth.
 *
 * How it works:
 * 1. `key`    → Must match a field name from the backend API response.
 *               Example: backend returns { totalStudents: 10 }
 *
 * 2. `label`  → The human-readable title shown on the stat card UI.
 *
 * 3. `color`  → CSS class used to style the card (background / accent color).
 *
 * 4. `format` → A function that converts the raw backend value into
 *               a UI-friendly display value (currency, stars, decimals, etc).
 *
 * Flow:
 * Backend Response
 *   → STAT_CONFIG.map(...)
 *       → picks value using `key`
 *       → formats it using `format`
 *       → attaches label + color
 *   → final `stats` array
 *   → rendered by <InstructorDashboardStatCards />
 *
 * Benefits:
 * - No hardcoded UI values
 * - Easy to add / remove / reorder stat cards
 * - Formatting logic is centralized
 * - Backend and UI are loosely coupled
 */

const STAT_CONFIG = [
    {
        key: "totalStudents",
        label: "Total Students",
        color: "instructor-dashboard__stat-yellow",
        format: (v) => v,
    },
    {
        key: "totalCourse",
        label: "Total Courses",
        color: "instructor-dashboard__stat-green",
        format: (v) => v,
    },
    {
        key: "totalEnrollments",
        label: "Total Enrollments",
        color: "instructor-dashboard__stat-blue",
        format: (v) => v,
    },
    {
        key: "totalRevenue",
        label: "Total Revenue",
        color: "instructor-dashboard__stat-purple",
        format: (v) => `₹${Number(v).toLocaleString("en-IN")}`,
    },
    {
        key: "averageRating",
        label: "Avg Rating",
        color: "instructor-dashboard__stat-orange",
        format: (v) => `${Number(v).toFixed(1)} ⭐`,
    },
    {
        key: "totalReviews",
        label: "Total Reviews",
        color: "instructor-dashboard__stat-teal",
        format: (v) => v,
    },
    {
        key: "lastMonthRevenue",
        label: "This Month Revenue",
        color: "instructor-dashboard__stat-pink",
        format: (v) => `₹${Number(v).toLocaleString("en-IN")}`,
    },
    {
        key: "newStudent",
        label: "New Students (7d)",
        color: "instructor-dashboard__stat-indigo",
        format: (v) => v,
    },
];

const reviews = [
    { course: "React", category: "Web Dev", rating: 4.6, date: "2024-12-10" },
    {
        course: "Spring Boot",
        category: "Backend",
        rating: 4.4,
        date: "2024-11-22",
    },
    { course: "Python", category: "AI/ML", rating: 4.7, date: "2024-12-02" },
];

export default function InstructorDashboard() {
    const [coursePerCategory, setCoursePerCategory] = useState([]);
    const [studentPerCourse, setStudentPerCourse] = useState([]);
    const [stats, setStats] = useState([]);
    const [availableAmount, setAvailableAmount] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCPC = async () => {
            try {
                const data = await fetchCoursePerCategory();
                setCoursePerCategory(data);
            } catch (error) {
                toast.error(error.message);
            }
        };

        const fetchSPC = async () => {
            try {
                const data = await fetchStudentPerCourse();
                console.log(data);
                setStudentPerCourse(data);
            } catch (error) {
                toast.error(error.message);
            }
        };

        const fetchStat = async () => {
            try {
                const data = await fetchDashboardStat();
                console.log(data);

                const mappedStats = STAT_CONFIG.map((stat) => ({
                    label: stat.label,
                    value: stat.format(data?.[stat.key] ?? 0),
                    color: stat.color,
                }));

                setStats(mappedStats);
                setAvailableAmount(data.availableAmount);
            } catch (error) {
                toast.error(error.message);
            }
        };

        const loadData = async () => {
            setLoading(true);
            await fetchCPC();
            await fetchSPC();
            await fetchStat();
            setLoading(false);
        };

        loadData();
    }, [availableAmount]);

    if (loading) {
        return (
            <div className="instructor-dashboard">
                <Loader text="Loading dashboard..." />
            </div>
        );
    }

    return (
        <div className="instructor-dashboard">
            <InstructorDashboardHeader name="Sanket Raut" />

            {/* Row 1 & 2: Stats (4 × 2 grid) */}
            <InstructorDashboardStatCards stats={stats} />

            {/* Wallet */}
            <InstructorDashboardWallet
                wallet={availableAmount}
                onSave={(newAmount) => setAvailableAmount(newAmount)}
            />

            {/* Students per Course */}
            <InstructorDashboardCourseGraph
                studentsPerCourse={studentPerCourse}
            />

            {/* Courses per Category */}
            <InstructorDashboardCategoryGraph
                coursesPerCategory={coursePerCategory}
            />

            {/* Reviews */}
            <InstructorDashboardReviewTable reviews={reviews} />
        </div>
    );
}
