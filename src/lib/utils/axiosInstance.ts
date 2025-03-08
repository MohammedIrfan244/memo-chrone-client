import axios from "axios";
import handleAxiosError from "./handleAxiosError";
import { logger } from "./logger";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`,
          { withCredentials: true }
        );
        localStorage.setItem("accessToken", response.data.accessToken);
        const accessToken = response.data.accessToken;
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        logger(handleAxiosError(error));
        const existingRefreshToken = localStorage.getItem("refreshToken");
        if (existingRefreshToken) {
          await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`, {
            withCredentials: true,
          });
        }
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        return Promise.reject(error);
      }
    }
    logger(handleAxiosError(error));
    return Promise.reject(error);
  }
);
