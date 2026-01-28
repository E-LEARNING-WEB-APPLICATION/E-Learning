import { BarChart, Legend, ResponsiveContainer } from "recharts";
import ChartContainer from "../atoms/ChartContainer";
import LoadingSpinnerAtom from "../atoms/LoadingSpinnerAtom";
import NoDataAtom from "../atoms/NoDataAtom";
import { ChartXAxisAtom, ChartYAxisAtom } from "../atoms/ChartAxisAtom";
import ChartTooltipAtom from "../atoms/ChartTooltipAtom";
const CourseRatingChart = ({ data = [], loading }) => {
  return (
    <ChartContainer title="Course Rating Overview">
      {loading ? (
        <LoadingSpinnerAtom />
      ) : data.length === 0 ? (
        <NoDataAtom />
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <ChartXAxisAtom dataKey="courseName" />
            <ChartYAxisAtom domain={[0, 5]} />
            <ChartTooltipAtom />
            <Legend />
            <ChartBarAtom dataKey="avgRating" color="#4a77f3" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </ChartContainer>
  );
};

export default CourseRatingChart;
