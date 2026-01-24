import apiClient from "@/utils/apiClient"

export const getStudentDetail = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await apiClient.get("profile/student", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
        console.log(response.data)
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
