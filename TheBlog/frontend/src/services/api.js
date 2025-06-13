import axios from "axios";

const API_URL = "/api/login/";
const API_URL = "/api/register/";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

const api = {
  register: async (userData) => {
    return await axiosInstance.post("/register/", userData);
  },
  login: async (credentials) => {
    return await axiosInstance.post("/login/", credentials);
  },
};

export default api;
