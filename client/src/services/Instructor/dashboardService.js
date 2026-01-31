import apiClient from "@/utils/apiClient";

export const fetchCoursePerCategory = async () => {
      try {
            const response = await apiClient.get("/instructorStatistics/coursesPerCategory")
            return response.data;
      } catch (error) {
            if (error.response?.data) {
                  return error.response.data;
            }
            return {
                  success: false,
                  message: "Server error. Please try again."
            }
      }
}

export const fetchStudentPerCourse = async () => {
      try {
            const response = await apiClient.get("/instructorStatistics/studentPerCourse");
            return response.data;
      } catch (error) {
            if (error.response?.data) {
                  return error.response.data;
            }
            return {
                  success: false,
                  message: "Server error, Please try Again"
            }
      }
}

export const fetchDashboardStat = async () => {
      try {
            const response = await apiClient.get("/instructorStatistics/stats");
            return response.data;
      } catch (error) {
            if (error.response?.data) {
                  return error.response.data;
            }
            return {
                  success: false,
                  message: "Server error, Please try Again"
            }
      }
}

export const withdrawAmount = async () => {
      try {
            const response = await apiClient.get("/api/v1/instructor/withdraw");
            return response.data;
      } catch (error) {
            if (error.response?.data) {
                  return error.response.data;
            }
            return {
                  success: false,
                  message: "Server error, Please try Again"
            }
      }
}