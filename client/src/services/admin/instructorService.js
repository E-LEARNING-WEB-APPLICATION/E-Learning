import apiClient, { ADMIN_BASE_PATH } from "@/utils/apiClient";

export const fetchAllInstructors = async () => {
  try {
    const response = await apiClient.get(`${ADMIN_BASE_PATH}/instructors`);
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

export const getInstructorById = async (instructorId) => {
  try {
    const response = await apiClient.get(`/api/v1/instructor/${instructorId}`);

    console.log(response);
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
