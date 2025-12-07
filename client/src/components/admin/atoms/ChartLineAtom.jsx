import { Line } from "recharts";

const ChartLineAtom = ({ dataKey, color }) => (
  <Line
    type="monotone"
    dataKey={dataKey}
    stroke={color}
    strokeWidth={3}
    dot={false}
  />
);

export default ChartLineAtom;
