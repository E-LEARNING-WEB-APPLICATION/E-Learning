import apiClient, { ADMIN_BASE_PATH } from "@/utils/apiClient";
import { apiRequest } from "../apiHelper";

export const updateAdminProfile = (formData) => {
  return apiRequest(() =>
    apiClient.put(`${ADMIN_BASE_PATH}/profile`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  );
};

export const updateAdminPassword = (passwordDto) => {
  return apiRequest(() =>
    apiClient.patch(`${ADMIN_BASE_PATH}/password`, passwordDto),
  );
};
