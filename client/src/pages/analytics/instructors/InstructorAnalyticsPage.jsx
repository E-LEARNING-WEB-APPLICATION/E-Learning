import AnalyticsPageLayout from "../_components/AnalyticsPageLayout";
import AnalyticsSection from "../_components/AnalyticsSection";

export default function InstructorAnalyticsPage() {
  return (
    <AnalyticsPageLayout title="Instructor Analytics">
      <AnalyticsSection title="Instructor Enrollment Trends">
        {/* chart here */}
      </AnalyticsSection>

      <AnalyticsSection title="Instructor Activity Overview">
        {/* chart */}
      </AnalyticsSection>
    </AnalyticsPageLayout>
  );
}
