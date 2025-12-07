import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Tooltip,
  Legend,
} from "recharts";

import ChartContainer from "@/components/admin/atoms/ChartContainer";
import ChartTooltipAtom from "@/components/admin/atoms/ChartTooltipAtom";
import ChartLineAtom from "@/components/admin/atoms/ChartLineAtom";
import NoDataAtom from "@/components/admin/atoms/NoDataAtom";
import LoadingSpinnerAtom from "@/components/admin/atoms/LoadingSpinnerAtom";
import { ChartXAxisAtom, ChartYAxisAtom } from "../atoms/ChartAxisAtom";

const UserGrowthChart = ({ data, loading }) => {
  return (
    <ChartContainer title="User Growth Curve">
      {loading ? (
        <LoadingSpinnerAtom />
      ) : !data || data.length === 0 ? (
        <NoDataAtom />
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <ChartXAxisAtom />
            <ChartYAxisAtom />
            <Tooltip content={<ChartTooltipAtom />} />
            <Legend />
            <ChartLineAtom dataKey="users" color="#00b894" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </ChartContainer>
  );
};

export default UserGrowthChart;
