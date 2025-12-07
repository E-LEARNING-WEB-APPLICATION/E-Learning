import { Cell, Pie } from "recharts";

const ChartPieAtom = ({ dataKey, nameKey, colors, data }) => (
  <Pie
    data={data}
    dataKey={dataKey}
    nameKey={nameKey}
    outerRadius={100}
    fill="#8884d8"
    label
  >
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
    ))}
  </Pie>
);

export default ChartPieAtom;
