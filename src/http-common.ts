import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "apibckdn.arturozepeda.xyz",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
