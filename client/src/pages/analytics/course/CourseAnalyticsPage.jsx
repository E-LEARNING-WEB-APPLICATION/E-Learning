import AnalyticsPageLayout from "../_components/AnalyticsPageLayout";
import AnalyticsSection from "../_components/AnalyticsSection";
import ChartCard from "@/components/admin/atoms/NewChartCard";

import CategorySplitChart from "./_charts/CategorySplitChart";
import CompletionGauge from "./_charts/CompletionGuage";
import EnrollmentTrendChart from "./_charts/EnrollmentTrendChart";
import RatingDistributionChart from "./_charts/RatingDistributionChart";
import RevenueContributionChart from "./_charts/RevenueContributionChart";
import EngagementFunnelChart from "./_charts/EngagementFunnelChart";

export default function CourseAnalyticsPage() {
  return (
    <AnalyticsPageLayout title="Course Analytics">
      {/* SECTION 1 */}
      <AnalyticsSection title="Enrollment Overview">
        <ChartCard className="col-md-8" title="Enrollment Trend">
          <EnrollmentTrendChart
            data={[
              { month: "Jan", enrollments: 120 },
              { month: "Feb", enrollments: 180 },
              { month: "Mar", enrollments: 140 },
              { month: "Apr", enrollments: 200 },
              { month: "May", enrollments: 160 },
            ]}
          />
        </ChartCard>

        <ChartCard className="col-md-4" title="Completion Rate">
          <CompletionGauge percentage={76} />
        </ChartCard>
      </AnalyticsSection>

      {/* SECTION 2 */}
      <AnalyticsSection title="Learner Insights">
        <ChartCard className="col-md-4" title="Category Split">
          <CategorySplitChart
            data={[
              { category: "Frontend", value: 20 },
              { category: "Backend", value: 60 },
              { category: "DevOps", value: 20 },
            ]}
          />
        </ChartCard>
        <ChartCard className="col-md-4" title="Category Split">
          <CategorySplitChart
            data={[
              { category: "Frontend", value: 20 },
              { category: "Backend", value: 60 },
              { category: "DevOps", value: 20 },
            ]}
          />
        </ChartCard>

        <ChartCard className="col-md-4" title="Rating Distribution">
          <RatingDistributionChart
            data={[
              { rating: "1★", count: 10 },
              { rating: "2★", count: 14 },
              { rating: "3★", count: 30 },
              { rating: "4★", count: 55 },
              { rating: "5★", count: 85 },
            ]}
          />
        </ChartCard>
      </AnalyticsSection>

      {/* SECTION 3 */}
      <AnalyticsSection title="Financial Performance">
        <ChartCard className="col-md-12" title="Revenue Contribution">
          <RevenueContributionChart
            data={[
              { course: "React", revenue: 80000 },
              { course: "Java", revenue: 60000 },
              { course: "AWS", revenue: 50000 },
              { course: "DevOps", revenue: 40000 },
              { course: "OS", revenue: 50000 },
            ]}
          />
        </ChartCard>
      </AnalyticsSection>

      {/* SECTION 4 */}
      <AnalyticsSection title="Engagement Funnel">
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
      </AnalyticsSection>
    </AnalyticsPageLayout>
  );
}
