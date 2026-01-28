import { useEffect, useState } from "react";
import ChartCard from "../atoms/CharCard";
import CategoryPieChart from "../charts/CategoryPieChart";
import EnrollmentChart from "../charts/EnrollmentChart";
import {
  fetchCategoryDistribution,
  fetchStudentEnrolledTrendByMonth,
} from "@/services/admin/dashboardService";

const EnrollmentAndCategory = () => {
  const [duration, setDuration] = useState(6);
  const [enrollmentData, setEnrollmentData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [loadingEnrollments, setLoadingEnrollments] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    loadEnrollmentTrend();
  }, [duration]);

  useEffect(() => {
    loadCategoryDistribution();
  }, []);

  const loadEnrollmentTrend = async () => {
    try {
      setLoadingEnrollments(true);
      const response = await fetchStudentEnrolledTrendByMonth(duration);

      const formatted = response.map((item) => ({
        label: formatMonth(item.month, item.year),
        enrollments: item.enrolledCount,
      }));

      setEnrollmentData(formatted);
    } finally {
      setLoadingEnrollments(false);
    }
  };

  const loadCategoryDistribution = async () => {
    try {
      setLoadingCategories(true);
      const response = await fetchCategoryDistribution();

      const formatted = response.map((item) => ({
        name: item.categoryName,
        value: item.courseCount,
      }));

      setCategoryData(formatted);
    } finally {
      setLoadingCategories(false);
    }
  };

  return (
    <>
      {/* ---------- ENROLLMENT TREND ---------- */}
      <div className="col-md-8">
        <ChartCard
          title="Student Enrollment Trend"
          actions={
            <select
              className="form-select form-select-sm"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              style={{ width: 90 }}
            >
              <option value={3}>3M</option>
              <option value={6}>6M</option>
              <option value={12}>1Y</option>
            </select>
          }
        >
          {loadingEnrollments ? (
            <div className="text-muted">Loading enrollment trend...</div>
          ) : (
            <EnrollmentChart data={enrollmentData} />
          )}
        </ChartCard>
      </div>

      {/* ---------- CATEGORY SPLIT ---------- */}
      <div className="col-md-4">
        <ChartCard title="Course Categories Split">
          {loadingCategories ? (
            <div className="text-muted">Loading categories...</div>
          ) : (
            <CategoryPieChart data={categoryData} />
          )}
        </ChartCard>
      </div>
    </>
  );
};

export default EnrollmentAndCategory;

// ---- helpers ----
const formatMonth = (month, year) => {
  const date = new Date(year, month - 1);
  return date.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
};
