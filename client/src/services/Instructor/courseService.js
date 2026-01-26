import apiClient, { API_BASE_PATH } from "@/utils/apiClient";

export async function addCourse(formData) {
  try {
    const response = await apiClient.post(
      `${API_BASE_PATH}/instructor/addCourse`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    const data = await response.data;
    return {
      success: true,
      data,
    };
  } catch (error) {
    if (error.response?.data) {
      return error.response.data;
    }

    return {
      success: false,
      message: "Server error. Please try again.",
    };
  }
}

export async function fetchAddedCourses() {
  try {
    const response = await apiClient.get(
      `${API_BASE_PATH}/instructor/getAllInstructorCourses`,
    );

    const data = await response.data;
    return { success: true, data };
  } catch (error) {
    if (error.response?.data) {
      return error.response.data;
    }

    return {
      success: false,
      message: "Server error. Please try again.",
    };
  }
}
