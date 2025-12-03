import EnrollmentChart from "../charts/EnrollmentChart";
import UserGrowthChart from "../charts/UserGrowthChart";

const EnrollmentAndGrowth = () => {
  return (
    <>
      <div className="col-md-8">
        <div className="chart-card p-3 shadow-sm rounded">
          <h5>Enrollment Trend</h5>
          <EnrollmentChart />
        </div>
      </div>

      <div className="col-md-4">
        <div className="chart-card p-3 shadow-sm rounded">
          <h5>User Growth</h5>
          <UserGrowthChart />
        </div>
      </div>
    </>
  );
};

export default EnrollmentAndGrowth;
