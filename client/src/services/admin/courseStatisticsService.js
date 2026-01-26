import apiClient, { API_BASE_PATH } from "@/utils/apiClient";
import { apiRequest } from "../apiHelper";

export const fetchCourseOverviewData = () => {
  return apiRequest(() =>
    apiClient.get(`${API_BASE_PATH}/statistics/course/overview`),
  );
};
