import ChartCard from "../atoms/CharCard";
import CourseRatingChart from "../charts/CourseRatingChart";
import TopInstructorsTable from "../charts/TopInstructorsTable";
import UserGrowthChart from "../charts/UserGrowthChart";

const TopInstructorsAndRatings = () => (
  <>
    {/* <div className="col-md-6 mb-3">
        <div className="chart-card p-3 shadow-sm rounded">
          <h5>User Growth</h5>
          <UserGrowthChart
            data={[
              { name: "Jan", users: 1100 },
              { name: "Feb", users: 1200 },
              { name: "Mar", users: 1100 },
              { name: "Apr", users: 1300 },
              { name: "May", users: 1050 },
            ]}
          />
        </div>
      </div> */}

    <div className="col-md-6">
      <TopInstructorsTable
        data={[
          { name: "John Doe", revenue: 180000, enrollments: 1200 },
          { name: "Sarah Smith", revenue: 145000, enrollments: 980 },
          { name: "Alex Johnson", revenue: 130000, enrollments: 890 },
          { name: "Priya Sharma", revenue: 122000, enrollments: 760 },
          { name: "Ravi Kumar", revenue: 118000, enrollments: 720 },
        ]}
      />
    </div>

    <div className="col-md-6 mb-3">
      <ChartCard title="Course Rating Overview">
        <CourseRatingChart
          data={[
            { name: "React Fundamentals", rating: 4.6 },
            { name: "Java Spring Boot", rating: 4.4 },
            { name: "Python for Beginners", rating: 4.2 },
            { name: "Data Structures & Algorithms", rating: 4.8 },
            { name: "UI/UX Design Basics", rating: 4.1 },
            { name: "Node.js REST APIs", rating: 4.3 },
          ]}
        />
      </ChartCard>
    </div>
  </>
);

export default TopInstructorsAndRatings;
