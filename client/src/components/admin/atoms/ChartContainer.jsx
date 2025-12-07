const ChartContainer = ({ title, children }) => (
  <div className="chart-container card p-3 shadow-sm rounded-4">
    <h5 className="fw-semibold mb-3">{title}</h5>
    {children}
  </div>
);

export default ChartContainer;
