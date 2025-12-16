import apiClient from "@/utils/apiClient";

export const registerStudent = async (data) => {
  try {
    const response = await apiClient.post("user/auth/register", data);
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
