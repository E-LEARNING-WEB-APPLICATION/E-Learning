import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const RevenueContributionChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="course" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#f97316" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueContributionChart;
