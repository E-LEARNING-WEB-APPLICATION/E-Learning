import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

const EngagementFunnelChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stage" />
        <YAxis />
        <Tooltip />
        <Area dataKey="count" fill="#3b82f6" stroke="#3b82f6" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default EngagementFunnelChart;
