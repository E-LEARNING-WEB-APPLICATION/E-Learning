import React from "react";
import { ResponsiveContainer, PieChart, Tooltip, Legend } from "recharts";

import ChartContainer from "@/components/admin/atoms/ChartContainer";
import ChartPieAtom from "@/components/admin/atoms/ChartPieAtom";
import ChartTooltipAtom from "@/components/admin/atoms/ChartTooltipAtom";
import NoDataAtom from "@/components/admin/atoms/NoDataAtom";
import LoadingSpinnerAtom from "@/components/admin/atoms/LoadingSpinnerAtom";

const COLORS = ["#4a77f3", "#ff7675", "#55efc4", "#ffeaa7", "#fd79a8"];

const CategoryPieChart = ({ data, loading }) => {
  console.log(data);
  data.map((_, i) => console.log(i));
  return (
    <ChartContainer title="Category Distribution">
      {loading ? (
        <LoadingSpinnerAtom />
      ) : !data || data.length === 0 ? (
        <NoDataAtom />
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip content={<ChartTooltipAtom />} />
            <Legend />
            <ChartPieAtom
              dataKey="value"
              nameKey="category"
              data={data}
              colors={COLORS}
            ></ChartPieAtom>
          </PieChart>
        </ResponsiveContainer>
      )}
    </ChartContainer>
  );
};

export default CategoryPieChart;
