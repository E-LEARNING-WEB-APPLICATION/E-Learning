import axios from "axios";
import { getToken } from "./auth";
import.meta.env.VITE_API_URL;

export const API_URL = import.meta.env.VITE_API_URL;
export const ADMIN_BASE_PATH = "api/v1/admin";
export const API_BASE_PATH = "api/v1";

const apiClient = axios.create({
  baseURL: API_URL,
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

export default apiClient;
