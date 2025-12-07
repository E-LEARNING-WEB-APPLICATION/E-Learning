import ChartCard from "@/components/admin/atoms/NewChartCard";
import AnalyticsPageLayout from "../_components/AnalyticsPageLayout";
import AnalyticsSection from "../_components/AnalyticsSection";
import CategoryPieChart from "@/components/admin/charts/CategoryPieChart";
export default function CourseAnalyticsPage() {
  return (
    <AnalyticsPageLayout title="Course Analytics">
      <AnalyticsSection title="Course Enrollment Trends">
        {/* chart here */}
        <ChartCard className="col-md-4" title="Course Categories Split">
          <CategoryPieChart
            data={[
              { category: "frontend", value: 20 },
              { category: "backend", value: 60 },
              { category: "devops", value: 20 },
            ]}
          />
        </ChartCard>
        <ChartCard className="col-md-5" title="Course Categories Split">
          <CategoryPieChart
            data={[
              { category: "frontend", value: 20 },
              { category: "backend", value: 60 },
              { category: "devops", value: 20 },
            ]}
          />
        </ChartCard>
        <ChartCard className="col-md-3" title="Course Categories Split">
          <CategoryPieChart
            data={[
              { category: "frontend", value: 20 },
              { category: "backend", value: 60 },
              { category: "devops", value: 20 },
            ]}
          />
        </ChartCard>
      </AnalyticsSection>
      <AnalyticsSection title="Course Activity Overview">
        {/* chart */}
      </AnalyticsSection>
    </AnalyticsPageLayout>
  );
}
