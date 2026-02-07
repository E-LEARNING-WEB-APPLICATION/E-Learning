import apiClient from "@/utils/apiClient";

export async function addCourse(formData) {
  const response = await apiClient.post(`/addCourse`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
}

export async function getAddedCourses() {
  const response = await apiClient.get(
    `/api/v1/instructor/getAllInstructorCourses`,
  );

  const data = await response.data;

  console.log(data);
  return data;
}

export async function getCourseById(courseId) {
  const response = await apiClient.get(`/api/v1/courses/${courseId}`, {});
  return response.data;
}

export async function updateCourse(courseId, formData) {
  const response = await apiClient.put(
    `/api/v1/instructor/updateCourse/${courseId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );
  return response.data;
}

export async function fetchCoursesData() {
  const response = await apiClient.get(`/api/v1/instructor/getData`, {});
  return response;
}

export async function getStudents(courseId) {
  const response = await apiClient.get(
    `/api/v1/instructor/getStudentsLists/${courseId}`,
  );

  return response;
}

export async function setPublish(courseId, isPublished) {
  const response = await apiClient.put(
    `/api/v1/instructor/changePublish/${courseId}`,
    null,
    {
      params: {
        isPublished: isPublished,
      },
    },
  );

  return response;
}
