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

export const getAllDashboardCourses = async () => {
  try {
    const response = await apiClient.get(`/api/v1/courses/allCourses`);
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

export const getCoursesByCategory = async (categoryId) => {
  try {
    const response = await apiClient.get(`/api/v1/courses/getCategoryCourses/${categoryId}`);
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

export const getCourseStatusById = async (courseId) => {
  try {
    const response = await apiClient.get(`/api/v1/courses/courseStatus/${courseId}`);
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

export const getEnrolledCourses = async () => {
  try {
    const response = await apiClient.get(`/api/v1/courses/my-courses`);
    return response.data.data;
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