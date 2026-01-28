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

const InstructorDashboardCourseGraph = ({ studentsPerCourse }) => {
    return (
        <div className="instructor-dashboard__section-card">
            <h3 className="instructor-dashboard__section-title">
                Students per Course
            </h3>

            <ResponsiveContainer
                width="100%"
                height={studentsPerCourse.length * 45}>
                <BarChart
                    data={studentsPerCourse}
                    layout="vertical"
                    margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
                    <XAxis type="number" />
                    <YAxis
                        dataKey="course"
                        type="category"
                        width={180} // ✅ more space for names
                        tick={{ fontSize: 13 }} // ✅ readable font
                    />
                    <Tooltip />
                    <Bar
                        dataKey="students"
                        barSize={20} // ✅ thicker bars
                        radius={[0, 10, 10, 0]}>
                        {studentsPerCourse.map((_, index) => (
                            <Cell
                                key={index}
                                fill={
                                    [
                                        "#a78bfa",
                                        "#f9a8d4",
                                        "#fca5a5",
                                        "#6ee7b7",
                                        "#93c5fd",
                                        "#fde68a",
                                        "#fdba74",
                                        "#c4b5fd",
                                    ][index % 8]
                                }
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default InstructorDashboardCourseGraph;
