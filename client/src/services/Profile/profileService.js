import apiClient from "@/utils/apiClient";

export const getStudentDetail = async () => {
    try {
        const response = await apiClient.get("profile/student");
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

export const getAllSkills = async () => {
    try {

        const response = await apiClient.get("/profile/getAllSkill");

        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response;
        }
        return {
            success: false,
            message: "Server error, Please try again. ",
        };
    }
};

export const updateSkill = async (data) => {
    try {
        const response = await apiClient.put(
            "/profile/updateSkill",
          {
              skills : data,
            },
      );
      return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        }
        return {
            success: false,
            message: "Server error, Please try again. ",
        };
    }
};

export const addEducation = async (data) => {
  try {
    const response = await apiClient.post(
      "/profile/addEducation",
      data,
    );
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
    return {
      success: false,
      message: "Server error, Please try again. ",
    };
  }
};

export const updateEducation = async (data) => {
  try {
        const response = await apiClient.put(
            "/profile/updateEducation",
          data,
    );
      return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        }
        return {
            success: false,
            message: "Server error, Please try again. ",
        };
    }
}

export const deleteEducation = async (data) => {
  try {
    const response = await apiClient.delete(
      `/profile/deleteEducation/${data}`,
    );
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
    return {
      success: false,
      message: "Server error, Please try again. ",
    };
  }
};

export const updateStudentProfileDetails = async (data) => {
  try {
    const response = await apiClient.put(
      "/profile/updateStudentProfile",
      data,
    );
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
    return {
      success: false,
      message: "Server error, Please try again. ",
    };
  }
};

export const updateProfilePic = async (file) => {
    const formData = new FormData();
    formData.append("profilePic", file); 

    return apiClient.put(
        "/profile/updateProfilePic",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
};

export const getInstructorDetail = async () => {
    try {
        const response = await apiClient.get("profile/instructor");
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


export const getAllSpecialization = async () => {
    try {

        const response = await apiClient.get("/profile/getAllSpecialization");

        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response;
        }
        return {
            success: false,
            message: "Server error, Please try again. ",
        };
    }
};

export const updateSpecialization = async (data) => {
    try {
        const response = await apiClient.put(
            "/profile/updateSpecialization",
          {
              specializations : data,
            },
      );
      return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        }
        return {
            success: false,
            message: "Server error, Please try again. ",
        };
    }
};



export const updateInstructorProfileDetails = async (data) => {
  try {
    const response = await apiClient.put(
      "/profile/updateInstructorProfile",
      data,
    );
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
    return {
      success: false,
      message: "Server error, Please try again. ",
    };
  }
};