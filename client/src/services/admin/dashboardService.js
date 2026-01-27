import apiClient, { ADMIN_BASE_PATH, API_BASE_PATH } from "@/utils/apiClient";
import { apiRequest } from "../apiHelper";

export const fetchTotalStudents = () => {
  return apiRequest(() => apiClient.get(`${ADMIN_BASE_PATH}/student/count`));
};

export const fetchTotalInstructors = () => {
  return apiRequest(() =>
    apiClient.get(`${ADMIN_BASE_PATH}/instructors/count`),
  );
};

export const fetchTotalStudentsEnrolledInLast = (duration) => {
  return apiRequest(() =>
    apiClient.get(`${ADMIN_BASE_PATH}/student/enrolled/count`, {
      params: {
        duration, // string "1d", "1w", "1m"
      },
    }),
  );
};

export const fetchTotalCourses = () => {
  return apiRequest(() => apiClient.get(`${ADMIN_BASE_PATH}/course/count`));
};

export const fetchTotalStudentsActiveInLast = (duration) => {
  return apiRequest(() =>
    apiClient.get(`${ADMIN_BASE_PATH}/student/active/count`, {
      params: {
        duration, // string "1d", "1w", "1m"
      },
    }),
  );
};

export const fetchTotalRevenue = () => {
  return apiRequest(() => apiClient.get(`${API_BASE_PATH}/statistics/revenue`));
};

export const fetchRevenueTrendByMonth = (duration) => {
  return apiRequest(() =>
    apiClient.get(`${API_BASE_PATH}/statistics/revenue/by-month`, {
      params: {
        duration, // string "3m", "6m", "1y"
      },
    }),
  );
};

export const fetchStudentEnrolledTrendByMonth = (duration) => {
  return apiRequest(() =>
    apiClient.get(`${ADMIN_BASE_PATH}/student/enrolled/monthly`, {
      params: {
        duration, // number default 6
      },
    }),
  );
};

/*
params : {
    sortBy : ["REVENUE","ENROLLMENTS"],
    limit: number
}
*/
export const fetchInstructorsLeaderboard = (params) => {
  return apiRequest(() =>
    apiClient.get(`${ADMIN_BASE_PATH}/instructors/leaderboard`, {
      params,
    }),
  );
};

export const fetchCategoryDistribution = (params) => {
  return apiRequest(() =>
    apiClient.get(`${API_BASE_PATH}/statistics/category/distribution`, {
      params,
    }),
  );
};

export const fetchTopCourseRatingOverview = (params) => {
  return apiRequest(() =>
    apiClient.get(`${API_BASE_PATH}/statistics/course/by-rating`, {
      params,
    }),
  );
};

export const fetchTopCoursesByEnrollments = (params) => {
  return apiRequest(() =>
    apiClient.get(`${API_BASE_PATH}/statistics/course/enrollments`, {
      params, // top: number
    }),
  );
};
