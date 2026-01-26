import apiClient, { API_BASE_PATH } from "@/utils/apiClient";

export const addTopicToSection = async (sectionId, formData) => {
  try {
    const response = await apiClient.post(
      `${API_BASE_PATH}/sections/${sectionId}/topics`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return {
      success: true,
      data: response.data,
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
};

export const fetchTopicsBySection = async (sectionId) => {
  try {
    const response = await apiClient.get(
      `${API_BASE_PATH}/sections/${sectionId}/topics`,
    );
    return {
      success: true,
      data: response.data,
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
};
