const ChartCard = ({ title, children }) => (
  <div className="chart-card p-3 shadow-sm rounded bg-white">
    <h6 className="fw-bold mb-3">{title}</h6>
    {children}
  </div>
);

export default ChartCard;
