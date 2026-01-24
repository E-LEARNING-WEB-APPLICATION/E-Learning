"use client";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CourseEnrollmentScatterChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ScatterChart>
        <XAxis dataKey="x" name="Videos" />
        <YAxis dataKey="y" name="Enrollments" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
