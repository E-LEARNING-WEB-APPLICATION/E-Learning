import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const TopCourseConversionChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart
        data={data}
        layout="vertical"   // 👈 horizontal bars
        margin={{ left: 40 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        
        <XAxis
          type="number"
          domain={[0, 100]}
          tickFormatter={(v) => `${v}%`}
        />

        <YAxis
          type="category"
          dataKey="course"
          width={160}
        />

        <Tooltip
          formatter={(value) => [`${value}%`, "Conversion Rate"]}
        />

        <Bar
          dataKey="conversionRate"
          fill="#22c55e"   // green = good conversion
          radius={[0, 6, 6, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TopCourseConversionChart;
