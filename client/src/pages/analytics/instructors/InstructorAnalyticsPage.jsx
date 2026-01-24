import { useEffect, useState } from "react";
import AnalyticsPageLayout from "../_components/AnalyticsPageLayout";
import InstructorEarningsLineChart from "./_charts/InstructorEarningsLineChart";
import TopCoursesBarChart from "./_charts/TopCoursesBarChart";
import RatingDistributionRadarChart from "./_charts/RatingDistributionRadarChart";
import CourseEnrollmentScatter from "./_charts/CourseEnrollmentScatterChart";
import StudentEngagementLineChart from "./_charts/StudentEngagementLineChart";
import AnalyticsSection from "../_components/AnalyticsSection";
import ChartCard from "@/components/admin/atoms/NewChartCard";
import InstructorSearchSelect from "./InstructorSearchSelect";

export default function InstructorAnalyticsPage() {
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState("");

  useEffect(() => {
    // TODO: Replace this with API call: /admin/instructors
    setInstructors([
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@gmail.com",
        profile_pic: "https://i.pravatar.cc/160",
      },
      {
        id: 2,
        name: "Mary Smith",
        email: "marysmith@gmail.com",
        profile_pic: "https://i.pravatar.cc/160",
      },
      {
        id: 3,
        name: "Alex Johnson",
        email: "alexjohnson@gmail.com",
        profile_pic: "https://i.pravatar.cc/160",
      },
    ]);

    setSelectedInstructor(1); // Default
  }, []);

  return (
    <AnalyticsPageLayout title="Instructor Analytics">
      <InstructorSearchSelect
        instructors={instructors}
        selectedInstructor={selectedInstructor}
        onChange={(id) => setSelectedInstructor(id)}
      />

      <AnalyticsSection title="Instructor Revenue Overview">
        <ChartCard title={"Montly Instructor Earnings"}>
          <InstructorEarningsLineChart
            data={[
              { month: "Jan", earnings: 250 },
              { month: "Feb", earnings: 600 },
              { month: "Mar", earnings: 900 },
            ]}
          />
        </ChartCard>

        <ChartCard title={"Top 5 Earning Courses"}>
          <TopCoursesBarChart
            data={[
              { course: "React Basics", earnings: 900 },
              { course: "Node API", earnings: 700 },
              { course: "DevOps Bootcamp", earnings: 650 },
              { course: "Java Spring", earnings: 300 },
              { course: "Python ML", earnings: 250 },
            ]}
          />
        </ChartCard>
      </AnalyticsSection>

      <AnalyticsSection title="Ratings & Activity">
        {/* <AnalyticsSection title="Rating Overview"> */}
        <ChartCard title="Rating Overview" className="col-md-4">
          <RatingDistributionRadarChart
            data={[
              { label: "5 Star", value: 120 },
              { label: "4 Star", value: 90 },
              { label: "3 Star", value: 45 },
              { label: "2 Star", value: 10 },
              { label: "1 Star", value: 2 },
            ]}
          />
        </ChartCard>
        {/* </AnalyticsSection> */}

        <ChartCard title={"Course vs Enrollment Impact"} className="col-md-8">
          <CourseEnrollmentScatter
            data={[
              { x: 10, y: 200 }, // 10 videos → 200 students
              { x: 20, y: 500 },
              { x: 15, y: 300 },
            ]}
          />
        </ChartCard>
      </AnalyticsSection>

      <AnalyticsSection title="Engagement Trend">
        <ChartCard title={"Student Engagement Overview"}>
          <StudentEngagementLineChart
            data={[
              { date: "Jan", count: 20 },
              { date: "Feb", count: 35 },
              { date: "Mar", count: 50 },
              { date: "Apr", count: 40 },
              { date: "May", count: 80 },
            ]}
          />
        </ChartCard>
      </AnalyticsSection>
    </AnalyticsPageLayout>
  );
}
