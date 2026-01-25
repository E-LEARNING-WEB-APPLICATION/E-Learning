import apiClient from "@/utils/apiClient";

export const getCourseById = async (courseId) => {
  try {
    const response = await apiClient.get(`/api/v1/courses/${courseId}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return {
      success: false,
      message: "Server error. Please try again.",
    };
  }
};
