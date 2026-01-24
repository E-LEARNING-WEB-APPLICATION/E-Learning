const AnalyticsSection = ({ title, children }) => {
  return (
    <div className="mb-4">
      <h5 className="mb-3 fw-semibold">{title}</h5>
      <div className="row g-3">{children}</div>
    </div>
  );
};

export default AnalyticsSection;
