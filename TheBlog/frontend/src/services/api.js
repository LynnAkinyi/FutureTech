import axios from "axios";

const BASE_URL = "";

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
      console.log("Login response:", response.data);
      return response.data;
    } catch (error) {
      console.error("API error:", error);
      throw error.response?.data || error;
    }
  },
};

export default api;
