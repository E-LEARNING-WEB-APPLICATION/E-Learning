const ChartCard = ({ title, children, className = "col-md-6" }) => (
  <div className={className}>
    <div className="chart-card p-2 shadow-sm rounded bg-white h-100">
      {title && <h6 className="fw-bold mb-3">{title}</h6>}
      {children}
    </div>
  </div>
);

export default ChartCard;
