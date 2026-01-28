import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";

const InstructorDashboardCategoryGraph = ({ coursesPerCategory }) => {
    return (
        <div className="instructor-dashboard__section-card">
            <h3 className="instructor-dashboard__section-title">
                Courses per Category
            </h3>

            {(() => {
                const categoryCount = coursesPerCategory.length;

                // 🎯 Adaptive bar width based on number of categories
                const barSize =
                    categoryCount <= 2
                        ? 70
                        : categoryCount <= 4
                          ? 60
                          : categoryCount <= 6
                            ? 55
                            : categoryCount <= 8
                              ? 40
                              : 30;

                // 🎯 Adaptive spacing between bars
                const barCategoryGap =
                    categoryCount <= 4 ? 18 : categoryCount <= 8 ? 14 : 10;

                return (
                    <ResponsiveContainer
                        width="100%"
                        height={350}>
                        <BarChart
                            data={coursesPerCategory}
                            margin={{
                                top: 20,
                                right: 20,
                                left: 10,
                                bottom: 60,
                            }}
                            barCategoryGap={barCategoryGap}>
                            <XAxis
                                dataKey="name"
                                interval={0}
                                angle={categoryCount > 6 ? -30 : 0}
                                textAnchor={
                                    categoryCount > 6 ? "end" : "middle"
                                }
                                height={categoryCount > 6 ? 80 : 40}
                                tick={{ fontSize: 12 }}
                            />
                            <YAxis allowDecimals={false} />
                            <Tooltip />

                            <Bar
                                dataKey="value"
                                barSize={barSize}
                                radius={[6, 6, 0, 0]}>
                                {coursesPerCategory.map((_, index) => (
                                    <Cell
                                        key={index}
                                        fill={
                                            [
                                                "#93c5fd",
                                                "#a7f3d0",
                                                "#fcd34d",
                                                "#f9a8d4",
                                                "#c4b5fd",
                                                "#fde68a",
                                            ][index % 6]
                                        }
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                );
            })()}
        </div>
    );
};

export default InstructorDashboardCategoryGraph;
