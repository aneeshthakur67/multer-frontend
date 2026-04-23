import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000/api/user/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const makeApiRequest = async (
  url,
  method = "GET",
  data = null,
  headers = {},
) => {
  try {
    const response = await apiClient({
      url,
      method,
      data,
      headers: { ...headers },
    });

    return response.data;
  } catch (error) {
    console.error(`API Error [${method}] ${url}:`, error);
    throw error.response?.data || error.message;
  }
};
