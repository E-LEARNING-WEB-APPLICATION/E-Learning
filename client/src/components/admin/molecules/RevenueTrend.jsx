import { useEffect, useState } from "react";
import ChartCard from "../atoms/CharCard";
import RevenueChart from "../charts/RevenueChart";
import { fetchRevenueTrendByMonth } from "@/services/admin/dashboardService";

const RevenueTrend = () => {
  const [duration, setDuration] = useState("6m");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRevenueTrend = async () => {
      try {
        setLoading(true);
        const response = await fetchRevenueTrendByMonth(duration);

        const formatted = response.map((item) => ({
          label: formatMonth(item.month, item.year),
          revenue: Number(item.revenue),
        }));

        setData(formatted);
      } finally {
        setLoading(false);
      }
    };

    loadRevenueTrend();
  }, [duration]);

  return (
    <ChartCard
      title="Revenue Trend"
      actions={
        <select
          className="form-select form-select-sm"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={{ width: 90 }}
        >
          <option value="1m">1M</option>
          <option value="3m">3M</option>
          <option value="6m">6M</option>
          <option value="1y">1Y</option>
        </select>
      }
    >
      {loading ? (
        <div className="text-muted">Loading revenue trend...</div>
      ) : (
        <RevenueChart data={data} />
      )}
    </ChartCard>
  );
};

export default RevenueTrend;

// ---- helpers ----
const formatMonth = (month, year) => {
  const date = new Date(year, month - 1);
  return date.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
};
