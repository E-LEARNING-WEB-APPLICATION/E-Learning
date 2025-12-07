import { Bar } from "recharts";

const ChartBarAtom = ({ dataKey, color }) => (
  <Bar dataKey={dataKey} fill={color} radius={[6, 6, 0, 0]} />
);

export default ChartBarAtom;
