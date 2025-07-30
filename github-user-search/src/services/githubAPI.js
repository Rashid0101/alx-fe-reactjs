// src/services/githubAPI.js
import axios from "axios";

const API_URL = import.meta.env.VITE_GITHUB_API_URL;
// const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    // ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
  },
});

export const searchUsers = async (query) => {
  const response = await axiosInstance.get(`/search/users?q=${query}`);
  return response.data.items;
};
