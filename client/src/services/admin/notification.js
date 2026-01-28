import apiClient, { API_BASE_PATH } from "@/utils/apiClient";

export const fetchNotifications = async (params) => {
  const response = await apiClient.get(
    `${API_BASE_PATH}/notifications`,
    params,
  );
  return response.data.content;
};

export const markNotificationRead = async (notificationId, params) => {
  const response = await apiClient.patch(
    `${API_BASE_PATH}/notifications/${notificationId}/read`,
    params,
  );
  return response.data;
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
