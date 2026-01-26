import apiClient from "@/utils/apiClient";

export const addToWishlist = async (courseId) => {
  try {
    const response = await apiClient.post(`/api/v1/wishlist/${courseId}`);
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

export const removeFromWishlist = async (courseId) => {
  try {
    const response = await apiClient.delete(`/api/v1/wishlist/${courseId}`);
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

export const getWishlistCount = async () => {
  try {
    const response = await apiClient.get(`/api/v1/wishlist/count`);
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

export const getWishlist = async () => {
  try {
    const response = await apiClient.get(`/api/v1/wishlist`);
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
