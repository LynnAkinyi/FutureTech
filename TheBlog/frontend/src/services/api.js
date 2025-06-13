import axios from "axios";

const BASE_URL = "/api";

const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/login/`,
  REGISTER: `${BASE_URL}/register/`,
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
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};

export default api;
