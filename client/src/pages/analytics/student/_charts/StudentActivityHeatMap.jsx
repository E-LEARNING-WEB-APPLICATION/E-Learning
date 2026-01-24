"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import ChartCard from "@/components/admin/atoms/NewChartCard";

export default function StudentActivityHeatmap({ data }) {
  return (
    <ChartCard title="Active Days Trend" className="col-md-12">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="heat" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f6c23e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f6c23e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="active"
            stroke="#f6c23e"
            fill="url(#heat)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
