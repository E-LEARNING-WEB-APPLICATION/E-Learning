import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Tooltip,
  Legend,
} from "recharts";

import ChartContainer from "@/components/admin/atoms/ChartContainer";
import ChartBarAtom from "@/components/admin/atoms/ChartBarAtom";
import NoDataAtom from "@/components/admin/atoms/NoDataAtom";
import LoadingSpinnerAtom from "@/components/admin/atoms/LoadingSpinnerAtom";
import { ChartXAxisAtom, ChartYAxisAtom } from "../atoms/ChartAxisAtom";
import ChartTooltipAtom from "../atoms/ChartTooltipAtom";

const CourseRatingChart = ({ data, loading }) => {
  return (
    <ChartContainer title="Course Rating Overview">
      {loading ? (
        <LoadingSpinnerAtom />
      ) : !data || data.length === 0 ? (
        <NoDataAtom />
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <ChartXAxisAtom />
            <ChartYAxisAtom />
            <Tooltip />
            <Legend />
            <ChartBarAtom dataKey="rating" color="#4a77f3" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </ChartContainer>
  );
};

export default CourseRatingChart;
