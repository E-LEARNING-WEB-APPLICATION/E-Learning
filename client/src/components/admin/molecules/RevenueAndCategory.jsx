import RevenueChart from "../charts/RevenueChart";
// import CategoryPieChart from "../charts/CategoryPieChart";

const RevenueAndCategory = () => {
  return (
    <>
      <div className="col-md-8">
        <div className="chart-card p-3 shadow-sm rounded">
          <h5>Revenue Overview</h5>
          <RevenueChart />
        </div>
      </div>

      <div className="col-md-4">
        <div className="chart-card p-3 shadow-sm rounded">
          <h5>Course Categories</h5>
          {/* <CategoryPieChart /> */}
        </div>
      </div>
    </>
  );
};

export default RevenueAndCategory;
