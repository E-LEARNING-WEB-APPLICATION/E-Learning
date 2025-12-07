const AnalyticsPageLayout = ({ title, children }) => {
  return (
    <div className="p-3">
      <h2 className="mb-4 fw-bold">{title}</h2>
      {children}
    </div>
  );
};

export default AnalyticsPageLayout;
