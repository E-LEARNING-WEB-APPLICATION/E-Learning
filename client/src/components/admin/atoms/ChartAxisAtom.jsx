import { XAxis, YAxis } from "recharts";

export const ChartXAxisAtom = ({dataKey}) => <XAxis dataKey={dataKey} stroke="#888" />;
export const ChartYAxisAtom = () => <YAxis stroke="#888" />;
