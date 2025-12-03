const StatCard = ({ title, value, icon }) => {
  return (
    <div className="col">
      <div className="stat-card p-3 shadow-sm rounded">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="text-muted">{title}</h6>
            <h3 className="fw-bold">{value}</h3>
          </div>
          <div className="stat-icon">{icon}</div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
