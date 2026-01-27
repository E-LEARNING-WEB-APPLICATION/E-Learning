import axios from "axios";


export async function addCourse( formData) {
    const response = await axios.post('http://localhost:5193/addCourse', formData,
        {
            headers: { "Content-Type": "multipart/form-data" }
        }
    )
    return response;
}

export async function getAddedCourses() {
  try {
    const response = await axios.get(
      `http://localhost:5193/instructor/getAllInstructorCourses`,
    );

    const data = await response.data;
    return { success: true, data };
  } catch (error) {
    if (error.response?.data) {
      return error.response.data;
    }

    return {
      success: false,
      message: "Server error. Please try again.",
    };
  }
}
