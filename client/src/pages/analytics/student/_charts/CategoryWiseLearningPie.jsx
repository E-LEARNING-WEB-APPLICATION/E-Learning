"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import ChartCard from "@/components/admin/atoms/NewChartCard";

const COLORS = ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"];

export default function CategoryWiseLearningPie({ data }) {
  return (
    <ChartCard title="Learning Distribution" className="col-md-6">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie dataKey="value" data={data} outerRadius={90} label>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
