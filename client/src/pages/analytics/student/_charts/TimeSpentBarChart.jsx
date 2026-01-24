"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartCard from "@/components/admin/atoms/NewChartCard";

export default function TimeSpentBarChart({ data }) {
  return (
    <ChartCard title="Weekly Time Spent Learning" className="col-md-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="hours" fill="#1cc88a" />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
