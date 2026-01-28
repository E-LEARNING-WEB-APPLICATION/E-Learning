import axios from "axios";
import { getToken } from "./auth";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Attach token BEFORE every request
 * This ensures latest token is always used
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export const API_URL = "http://localhost:8080/";
export const ADMIN_BASE_PATH = "api/v1/admin";
export const API_BASE_PATH = "api/v1";

export default apiClient;
