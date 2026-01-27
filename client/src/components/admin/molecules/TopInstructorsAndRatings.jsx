import { useEffect, useState } from "react";

import ChartCard from "../atoms/CharCard";
import CourseRatingChart from "../charts/CourseRatingChart";
import TopInstructorsTable from "../charts/TopInstructorsTable";
import {
  fetchInstructorsLeaderboard,
  fetchTopCourseRatingOverview,
} from "@/services/admin/dashboardService";

const TopInstructorsAndRatings = () => {
  const [instructors, setInstructors] = useState([]);
  const [courseRatings, setCourseRatings] = useState([]);

  const [loadingInstructors, setLoadingInstructors] = useState(true);
  const [loadingRatings, setLoadingRatings] = useState(true);

  useEffect(() => {
    // Fetch instructor leaderboard
    fetchInstructorsLeaderboard({
      sortBy: "REVENUE",
      limit: 10,
    })
      .then((res) => {
        setInstructors(res);
      })
      .finally(() => setLoadingInstructors(false));

    // Fetch course ratings
    fetchTopCourseRatingOverview({ top: 10 })
      .then((res) => {
        // API → chart expects { name, rating }
        console.log(res);
        const mapped = res.map((c) => ({
          name: c.title,
          rating: c.rating,
        }));
        setCourseRatings(mapped);
      })
      .finally(() => setLoadingRatings(false));
  }, []);

  return (
    <>
      {/* Top Instructors */}
      <div className="col-md-6">
        <TopInstructorsTable data={instructors} loading={loadingInstructors} />
      </div>

      {/* Course Rating Overview */}
      <div className="col-md-6 mb-3">
        <ChartCard title="Course Rating Overview">
          <CourseRatingChart data={courseRatings} loading={loadingRatings} />
        </ChartCard>
      </div>
    </>
  );
};

export default TopInstructorsAndRatings;
