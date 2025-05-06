import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ORIGIN,
});

instance.interceptors.request.use((config) => {
  // const token = localStorage.getItem("token");
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
