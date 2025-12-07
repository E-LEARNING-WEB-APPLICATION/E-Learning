import AnalyticsPageLayout from "../_components/AnalyticsPageLayout";
import AnalyticsSection from "../_components/AnalyticsSection";

export default function StudentAnalyticsPage() {
  return (
    <AnalyticsPageLayout title="Student Analytics">
      <AnalyticsSection title="Student Enrollment Trends">
        {/* chart here */}
      </AnalyticsSection>

      <AnalyticsSection title="Student Activity Overview">
        {/* chart */}
      </AnalyticsSection>
    </AnalyticsPageLayout>
  );
}
