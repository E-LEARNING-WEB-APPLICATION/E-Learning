//import axios from "axios";

import apiClient, { API_BASE_PATH } from "@/utils/apiClient";

export const createSection = async (courseId, sectionForm) => {
  try {
    const response = await apiClient.post(
      `${API_BASE_PATH}/courses/${courseId}/sections`,
      sectionForm,
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

export const fetchSectionData = async (courseId) => {
  try {
    const response = await apiClient.get(
      `${API_BASE_PATH}/courses/${courseId}/sections`,
    );
    console.log("after req");
    console.log(response);
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
