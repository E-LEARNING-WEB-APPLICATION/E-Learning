import { useEffect, useState } from "react";
import AnalyticsPageLayout from "../_components/AnalyticsPageLayout";
import AnalyticsSection from "../_components/AnalyticsSection";
import ChartCard from "@/components/admin/atoms/NewChartCard";

import TopCoursesBarChart from "./_charts/TopCoursesBarChart";
import RatingDistributionRadarChart from "./_charts/RatingDistributionRadarChart";
import { fetchInstructorList, fetchInstructorRatingDistribution, fetchTopInstructorCourses } from "@/services/admin/dashboardService";
import InstructorSearchSelect from "./InstructorSearchSelect";


export default function InstructorAnalyticsPage() {
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const [topCourses, setTopCourses] = useState([]);
  const [ratingDistribution, setRatingDistribution] = useState([]);

  /**
   * Load instructors on page load
   */
  useEffect(() => {
    fetchInstructorList().then((res) => {

      setInstructors(res);

      if (res.length > 0) {
        setSelectedInstructor(res[0]);
      }
    });
  }, []);

  /**
   * Load analytics when instructor changes
   */
  useEffect(() => {
    if (!selectedInstructor) return;

    fetchTopInstructorCourses(selectedInstructor.instructorId, 5).then((res) => {
      const chartData = res.map((course) => ({
        course: course.title,
        earnings: course.revenue,
      }));
      setTopCourses(chartData);
    });

    fetchInstructorRatingDistribution(selectedInstructor.instructorId).then((res) => {
      const chartData = res.map((item) => ({
        label: `${item.rating} Star`,
        value: item.count,
      }));
      setRatingDistribution(chartData);
    });
  }, [selectedInstructor]);

  return (
    <AnalyticsPageLayout title="Instructor Analytics">
      <InstructorSearchSelect
        instructors={instructors}
        selectedInstructor={selectedInstructor}
        onChange={(instructor) => setSelectedInstructor(instructor)}
      />

      <AnalyticsSection title="Instructor Overview">
        <ChartCard title="Rating Overview" className="col-md-4">
          <RatingDistributionRadarChart data={ratingDistribution} />
        </ChartCard>

        <ChartCard title="Top 5 Earning Courses" className="col-md-8">
          <TopCoursesBarChart data={topCourses} />
        </ChartCard>
      </AnalyticsSection>
    </AnalyticsPageLayout>
  );
}
