import apiClient from "@/utils/apiClient";

export const getAllInstructor = async () => {
      try {
            const response = await apiClient.get("/api/v1/instructor/getAllInstructor")
            return response.data;
      } catch (error) {
            if (error.response) {
                  return error.response.data
            }
            return {
                  success: false,
                  message: "  Server Error. Please try again"
            }
      }
}