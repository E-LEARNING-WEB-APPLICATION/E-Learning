import React from "react";
import { ResponsiveContainer, LineChart, Tooltip, Legend } from "recharts";

import ChartContainer from "@/components/admin/atoms/ChartContainer";
import {
  ChartXAxisAtom,
  ChartYAxisAtom,
} from "@/components/admin/atoms/ChartAxisAtom";
import ChartTooltipAtom from "@/components/admin/atoms/ChartTooltipAtom";
import ChartLineAtom from "@/components/admin/atoms/ChartLineAtom";
import NoDataAtom from "@/components/admin/atoms/NoDataAtom";
import LoadingSpinnerAtom from "@/components/admin/atoms/LoadingSpinnerAtom";

const EnrollmentChart = ({ data, loading }) => {
  return (
    <ChartContainer title="Enrollment Trend">
      {loading ? (
        <LoadingSpinnerAtom />
      ) : !data || data.length === 0 ? (
        <NoDataAtom />
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            {/* expects: { label: "Jan 2025" } */}
            <ChartXAxisAtom dataKey="label" />
            <ChartYAxisAtom />

            <Tooltip content={<ChartTooltipAtom />} />
            <Legend />

            {/* expects: { enrollments: number } */}
            <ChartLineAtom
              dataKey="enrollments"
              name="Enrollments"
              color="#4a77f3"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </ChartContainer>
  );
};

export default EnrollmentChart;
