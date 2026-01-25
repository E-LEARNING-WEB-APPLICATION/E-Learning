import apiClient, { API_BASE_PATH } from "@/utils/apiClient";

export const fetchNotifications = async (params) => {
  try {
    const response = await apiClient.get(
      `${API_BASE_PATH}/notifications`,
      params,
    );
    return response.data.content;
  } catch (error) {
    if (error.message) {
      return error.response.data;
    }
    return {
      success: false,
      message: "Server error. Please try again.",
    };
  }
};

export const fetchUnreadCount = async (params) => {
  try {
    const response = await apiClient.get(
      `${API_BASE_PATH}/notifications/count`,
      params,
    );
    return response.data;
  } catch (error) {
    if (error.message) {
      return error.response.data;
    }
    return {
      success: false,
      message: "Server error. Please try again.",
    };
  }
};
