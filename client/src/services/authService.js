import apiClient, { ADMIN_BASE_PATH } from "@/utils/apiClient";

export const registerStudent = async (data) => {
  try {
    const response = await apiClient.post("user/auth/register/student", data);
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

export const registerInstructor = async (data) => {
  try {
    const response = await apiClient.post(
      "user/auth/register/instructor",
      data,
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

export const registerAdmin = async (formdata) => {
  try {
    const response = await apiClient.post(
      `${ADMIN_BASE_PATH}/register`,
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return response.data;
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

export const signIn = async (data) => {
  try {
    const response = await apiClient.post("user/auth/signIn", data);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return {
      success: "false",
      message: "Server error. Please try again.",
    };
  }
};
