import apiClient from "@/utils/apiClient";

export async function addTheSection(data) {
  const response = await apiClient.post(`/api/v1/instructor/addSection`, data);
  return response;
}

export async function getAllSections(courseId) {
  const response = await apiClient.get(
    `/api/v1/instructor/getCourseSections/${courseId}`,
  );

  return response;
}

export async function getSectionById(sectionId) {
  return apiClient.get(`/api/v1/instructor/getSection/${sectionId}`);
}

export async function updateSection(sectionId, data) {
  return apiClient.put(`/api/v1/instructor/updateSection/${sectionId}`, data);
}
