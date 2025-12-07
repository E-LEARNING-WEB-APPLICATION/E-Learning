const StatCard = ({ title, value, icon, growth, color = "primary" }) => {
  const isPositive = growth >= 0;

  return (
    <div className="col">
      <div className={`stat-card unified shadow-sm rounded stat-${color} px-3`}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="stat-title">{title}</p>
            <h3 className="stat-value">{value}</h3>

            {/* Growth Indicator */}
            <div className={`stat-growth ${isPositive ? "up" : "down"}`}>
              {isPositive ? "▲ " : "▼ "}
              {Math.abs(growth)}%
            </div>
          </div>

          <div className="stat-icon-wrapper">{icon}</div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
