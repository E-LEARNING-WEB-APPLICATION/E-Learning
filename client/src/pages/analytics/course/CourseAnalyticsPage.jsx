import AnalyticsPageLayout from "../_components/AnalyticsPageLayout";
import AnalyticsSection from "../_components/AnalyticsSection";
import ChartCard from "@/components/admin/atoms/NewChartCard";

import CategorySplitChart from "./_charts/CategorySplitChart";
import EnrollmentTrendChart from "./_charts/EnrollmentTrendChart";
import RatingDistributionChart from "./_charts/RatingDistributionChart";
import RevenueContributionChart from "./_charts/RevenueContributionChart";
import EngagementFunnelChart from "./_charts/EngagementFunnelChart";
import { useEffect, useState } from "react";
import { getAllDashboardCourses } from "@/services/courseService";
import CourseFilterBar from "./CourseFilterBar";
import {
  fetchCategoryDistribution,
  fetchCourseConversionRate,
  fetchCourseRatingDistribution,
  fetchStudentEnrolledTrendByMonth,
  fetchTopCoursesByConversionRate,
  fetchTopCoursesByRevenue,
} from "@/services/admin/dashboardService";
import ConversionGuage from "./_charts/CompletionGuage";
import TopCourseConversionChart from "./_charts/TopCourseConversionChart";

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function CourseAnalyticsPage() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrollmentData, setEnrollmentData] = useState([]);
  const [courseRevenueData, setCourseRevenueData] = useState([]);
  const [courseRatingData, setCourseRatingData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [conversionRate, setConversionRate] = useState(0);
  const [topCoursesByConversionRate, setTopCoursesByConversionRate] = useState(
    [],
  );

  useEffect(() => {
    getAllDashboardCourses().then((res) => {
      setCourses(res);
    });
    fetchTopCoursesByRevenue().then((res) => {
      const transformed = res.map((item) => ({
        course: item.title,
        revenue: item.revenue,
      }));
      setCourseRevenueData(transformed);
    });

    fetchTopCoursesByConversionRate().then((res) => {
      const transformed = res.map((item) => ({
        course: item.title,
        conversionRate: item.conversionRate,
      }));
      console.log("top courses by conversion rate", transformed);
      setTopCoursesByConversionRate(transformed);
    });

    loadCategoryDistribution();
  }, []);

  useEffect(() => {
    fetchStudentEnrolledTrendByMonth({ courseId: selectedCourse }).then(
      (res) => {
        const transformed = res.map((item) => ({
          month: MONTH_NAMES[item.month - 1],
          enrollments: item.enrolledCount,
        }));
        setEnrollmentData(transformed);
      },
    );

    fetchCourseConversionRate({ courseId: selectedCourse }).then((res) => {
      setConversionRate(res);
    });

    console.log("selected course", selectedCourse)
    fetchCourseRatingDistribution({ courseId: selectedCourse }).then(
      (res) => {
        const transformed = res.map((item) => ({
          rating: `${item.rating}★`,
          count: item.count,
        }));
        setCourseRatingData(transformed);
      },
    );
  }, [selectedCourse]);

  const loadCategoryDistribution = async () => {
    const response = await fetchCategoryDistribution();

    const formatted = response.map((item) => ({
      category: item.categoryName,
      value: item.courseCount,
    }));

    setCategoryData(formatted);
  };

  return (
    <AnalyticsPageLayout title="Course Analytics">
      {/* 🔍 COURSE FILTER */}
      <CourseFilterBar
        courses={courses}
        selectedCourse={selectedCourse}
        onSelect={setSelectedCourse}
      />

      {/* SECTION 1 */}
      <AnalyticsSection title="Enrollment Overview" Style={{ zIndex: 1 }}>
        <ChartCard
          className="col-md-12"
          title={
            selectedCourse
              ? `Enrollment Trend — ${selectedCourse.title}`
              : "Enrollment Trend (All Courses)"
          }
        >
          <EnrollmentTrendChart data={enrollmentData} />
        </ChartCard>
      </AnalyticsSection>

      {/* SECTION 2 */}
      <AnalyticsSection title="Learner Insights">
        <ChartCard className="col-md-4" title="Conversion Rate">
          <ConversionGuage percentage={conversionRate} />
        </ChartCard>
        <ChartCard className="col-md-4" title="Category Split">
          <CategorySplitChart data={categoryData} />
        </ChartCard>

        <ChartCard className="col-md-4" title="Rating Distribution">
          <RatingDistributionChart data={courseRatingData} />
        </ChartCard>
      </AnalyticsSection>

      {/* SECTION 3 */}
      <AnalyticsSection title="Financial Performance">
        <ChartCard className="col-md-12" title="Revenue Contribution">
          <RevenueContributionChart data={courseRevenueData} />
        </ChartCard>
      </AnalyticsSection>

      {/* SECTION 4 */}
      {/* <AnalyticsSection title="Engagement Funnel">
        <ChartCard className="col-md-12" title="User Engagement">
          <EngagementFunnelChart
            data={[
              { stage: "Viewed", count: 2000 },
              { stage: "Added to Cart", count: 1200 },
              { stage: "Enrolled", count: 600 },
              { stage: "Completed", count: 300 },
            ]}
          />
        </ChartCard>
      </AnalyticsSection> */}
    <AnalyticsSection title="Best Selling Courses">
      <ChartCard
        className="col-md-12"
        title="Top Courses by Conversion Rate"
      >
        <TopCourseConversionChart data={topCoursesByConversionRate} />
      </ChartCard>
    </AnalyticsSection>
    </AnalyticsPageLayout>
  );
}
