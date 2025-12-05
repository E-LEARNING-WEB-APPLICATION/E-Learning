import { useState } from "react";
import "./StatCard.css";

const AdvancedStatCard = ({ title, stats, icon, color = "primary" }) => {
  const [range, setRange] = useState("daily");

  return (
    <div className="col">
      <div className={`stat-card advanced unified shadow-sm rounded stat-${color}`}>
        
        {/* Header Tabs */}
        <div className="stat-tabs">
          {["daily", "weekly", "monthly"].map((r) => (
            <button
              key={r}
              className={`tab-btn ${range === r ? "active" : ""}`}
              onClick={() => setRange(r)}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div>
            <p className="stat-title">{title}</p>
            <h3 className="stat-value fade-anim">
              {stats[range]}
            </h3>
          </div>

          <div className="stat-icon-wrapper">{icon}</div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedStatCard;
