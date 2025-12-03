import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 6000 },
  { month: "Mar", revenue: 8000 },
  { month: "Apr", revenue: 7000 },
];

const RevenueChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#007bff" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
