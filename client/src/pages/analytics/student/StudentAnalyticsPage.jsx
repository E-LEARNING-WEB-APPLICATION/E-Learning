"use client";
import AnalyticsPageLayout from "../_components/AnalyticsPageLayout";
import AnalyticsSection from "../_components/AnalyticsSection";
import CategoryWiseLearningPie from "./_charts/CategoryWiseLearningPie";
import CourseCompletionRadarChart from "./_charts/CourseCompletionRadarChart";
import StudentActivityHeatmap from "./_charts/StudentActivityHeatMap";
import StudentProgressLineChart from "./_charts/StudentProgressLineChart";
import TimeSpentBarChart from "./_charts/TimeSpentBarChart";

export default function StudentAnalyticsPage() {
  return (
    <AnalyticsPageLayout title="Student Analytics">
      {/* SECTION 1 — Progress */}
      <AnalyticsSection title="Learning Progress Overview">
        <StudentProgressLineChart
          data={[
            { month: "Jan", progress: 20 },
            { month: "Feb", progress: 35 },
            { month: "Mar", progress: 50 },
            { month: "Apr", progress: 60 },
            { month: "May", progress: 75 },
            { month: "Jun", progress: 90 },
          ]}
        />

        <TimeSpentBarChart
          data={[
            { week: "Week 1", hours: 4 },
            { week: "Week 2", hours: 7 },
            { week: "Week 3", hours: 5 },
            { week: "Week 4", hours: 8 },
          ]}
        />
      </AnalyticsSection>

      {/* SECTION 2 — Completion Radar */}
      <AnalyticsSection title="Completion Breakdown">
        <CourseCompletionRadarChart
          data={[
            { category: "Frontend", completion: 80 },
            { category: "Backend", completion: 65 },
            { category: "DevOps", completion: 45 },
            { category: "AI/ML", completion: 30 },
            { category: "Database", completion: 55 },
          ]}
        />

        <CategoryWiseLearningPie
          data={[
            { category: "Frontend", value: 40 },
            { category: "Backend", value: 25 },
            { category: "AI/ML", value: 20 },
            { category: "DevOps", value: 15 },
          ]}
        />
      </AnalyticsSection>

      {/* SECTION 3 — Activity */}
      <AnalyticsSection title="Student Activity">
        <StudentActivityHeatmap
          data={[
            { month: "Jan", active: 12 },
            { month: "Feb", active: 18 },
            { month: "Mar", active: 22 },
            { month: "Apr", active: 19 },
            { month: "May", active: 25 },
            { month: "Jun", active: 28 },
          ]}
        />
      </AnalyticsSection>
    </AnalyticsPageLayout>
  );
}
