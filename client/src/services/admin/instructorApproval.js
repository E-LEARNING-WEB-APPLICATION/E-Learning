import apiClient, { ADMIN_BASE_PATH } from "@/utils/apiClient";

export const fetchPendingInstructors = async () => {
  try {
    const response = await apiClient.get(`${ADMIN_BASE_PATH}/instructors`, {
      params: {
        status: "PENDING",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.message) {
      return error.response.data;
    }
    return {
      success: false,
      message: "Server error. Please try again.",
    };
  }
};

export const fetchPendingInstructorsCount = async () => {
  try {
    const response = await apiClient.get(
      `${ADMIN_BASE_PATH}/instructors/count`,
      {
        params: {
          status: "PENDING",
        },
      },
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

export const approveInstructor = async (params) => {
  try {
    const response = await apiClient.put(
      `${ADMIN_BASE_PATH}/instructors/${params.instructorId}/approve`,
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

export const rejectInstructor = async (params) => {
  try {
    const response = await apiClient.put(
      `${ADMIN_BASE_PATH}/instructors/${params.instructorId}/reject`,
    );
    console.log(response.data);
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
