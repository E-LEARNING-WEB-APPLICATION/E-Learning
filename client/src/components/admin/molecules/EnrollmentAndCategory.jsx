import ChartCard from "../atoms/CharCard";
import CategoryPieChart from "../charts/CategoryPieChart";
import EnrollmentChart from "../charts/EnrollmentChart";

const EnrollmentAndCategory = () => {
  return (
    <>
      <div className="col-md-8">
        <div className="chart-card p-3 shadow-sm rounded">
          <h5>Enrollment Trend</h5>
          <EnrollmentChart
            data={[
              { name: "Jan", enrollments: 1100 },
              { name: "Feb", enrollments: 1200 },
              { name: "Mar", enrollments: 1100 },
              { name: "Apr", enrollments: 1300 },
              { name: "May", enrollments: 1050 },
            ]}
          />
        </div>
      </div>

      <div className="col-md-4 ">
        <ChartCard title="Course Categories Split">
          <CategoryPieChart
            data={[
              { category: "frontend", value: 20 },
              { category: "backend", value: 60 },
              { category: "devops", value: 20 },
            ]}
          />
        </ChartCard>
      </div>
    </>
  );
};

export default EnrollmentAndCategory;
