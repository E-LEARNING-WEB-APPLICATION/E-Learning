"use client";
import {
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  ResponsiveContainer,
} from "recharts";
import ChartCard from "@/components/admin/atoms/NewChartCard";

export default function CourseCompletionRadarChart({ data }) {
  return (
    <ChartCard title="Completion by Category" className="col-md-6">
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
          <Radar
            dataKey="completion"
            stroke="#36b9cc"
            fill="#36b9cc"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
