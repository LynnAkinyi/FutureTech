import axios from "axios";

const BASE_URL = ""; // Remove /api since it's included in baseURL

const API_ENDPOINTS = {
  LOGIN: "/api/login/",
  REGISTER: "/api/register/",
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

const api = {
  register: async (userData) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.REGISTER,
        userData
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  login: async (credentials) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.LOGIN,
        credentials
      );
      console.log("Login response:", response.data); // Debug log

      if (response.data && response.data.token) {
        return response.data;
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Login error:", error); // Debug log
      if (error.response) {
        throw error.response.data;
      }
      throw new Error("Network or server error");
    }
  },
};

export default api;
