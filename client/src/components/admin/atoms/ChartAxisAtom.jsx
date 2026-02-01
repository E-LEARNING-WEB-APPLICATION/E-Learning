import { XAxis, YAxis } from "recharts";

export const ChartXAxisAtom = ({ dataKey, ...props }) => (
  <XAxis
    dataKey={dataKey}
    stroke="#888"
    {...props}
  />
);

export const ChartYAxisAtom = (props) => (
  <YAxis
    stroke="#888"
    allowDecimals={false}
    {...props}
  />
);
