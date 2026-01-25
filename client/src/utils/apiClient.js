import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const API_URL = "http://localhost:8080/";
export const ADMIN_BASE_PATH = "api/v1/admin";
export const API_BASE_PATH = "api/v1";
export default apiClient;
