import apiClient from "@/utils/apiClient";

export async function addTopic(formData) {
  const response = await apiClient.post(
    `/api/v1/instructor/addTopic`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );

  return response;
}

export async function getTopics(sectionId) {
  const response = await apiClient.get(
    `/api/v1/instructor/getTopics/${sectionId.sectionId}`,
  );

  return response;
}

export async function getTopicById(topicId) {
  return apiClient.get(`/api/v1/instructor/getTopic/${topicId}`);
}

export async function updateTopic(formData) {
  return apiClient.put(`/api/v1/instructor/updateTopic`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}
