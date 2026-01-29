import "./InstructorDashboard.css";
import InstructorDashboardReviewTable from "./../../../components/instructor/dashboard/InstructorDashboardReviewTable";
import InstructorDashboardCategoryGraph from "./../../../components/instructor/dashboard/InstructorDashboardCategoryGraph";
import InstructorDashboardCourseGraph from "./../../../components/instructor/dashboard/InstructorDashboardCourseGraph";
import InstructorDashboardWallet from "./../../../components/instructor/dashboard/InstructorDashboardWallet";
import InstructorDashboardStatCards from "@/components/instructor/dashboard/InstructorDashboardStatCards";
import InstructorDashboardHeader from "@/components/instructor/dashboard/InstructorDashboardHeader";

const stats = [
    {
        label: "Total Students",
        value: 1240,
        color: "instructor-dashboard__stat-yellow",
    },
    {
        label: "Total Courses",
        value: 18,
        color: "instructor-dashboard__stat-green",
    },
    {
        label: "Total Enrollments",
        value: 3560,
        color: "instructor-dashboard__stat-blue",
    },
    {
        label: "Total Revenue",
        value: "₹3,45,000",
        color: "instructor-dashboard__stat-purple",
    },

    {
        label: "Active Students (30d)",
        value: 420,
        color: "instructor-dashboard__stat-teal",
    },
    {
        label: "Avg Rating",
        value: "4.6 ⭐",
        color: "instructor-dashboard__stat-orange",
    },
    {
        label: "This Month Revenue",
        value: "₹48,500",
        color: "instructor-dashboard__stat-pink",
    },
    {
        label: "New Students (7d)",
        value: 56,
        color: "instructor-dashboard__stat-indigo",
    },
];

const studentsPerCourse = [
    { course: "React", students: 120 },
    { course: "Spring Boot", students: 95 },
    { course: "Python", students: 150 },
    { course: "Machine Learning", students: 80 },
    { course: "Data Structures", students: 110 },
    { course: "Algorithms", students: 90 },
    { course: "DevOps", students: 70 },
    { course: "Docker", students: 60 },
    { course: "Kubernetes", students: 55 },
    { course: "System Design", students: 85 },
    { course: "UI/UX", students: 65 },
    { course: "Cloud Basics", students: 75 },
];

const coursesPerCategory = [
    { name: "Web Dev", value: 6 },
    { name: "Backend", value: 4 },
    { name: "AI/ML", value: 5 },
    { name: "Design", value: 3 },
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
    return (
      <div className="instructor-dashboard">
        <InstructorDashboardHeader name="Sanket Raut" />
            {/* Row 1 & 2: Stats (4 × 2 grid) */}
            <InstructorDashboardStatCards stats={stats} />

            {/* Wallet */}
            <InstructorDashboardWallet wallet={"₹ 42,300"} />

            {/* Students per Course */}
            <InstructorDashboardCourseGraph
                studentsPerCourse={studentsPerCourse}
            />

            {/* Courses per Category */}
            <InstructorDashboardCategoryGraph
                coursesPerCategory={coursesPerCategory}
            />

            {/* Reviews */}
            <InstructorDashboardReviewTable reviews={reviews} />
        </div>
    );
}
