import axios from "axios";
import { API } from "../shared/index.js";

const apiClient = axios.create({
  baseURL: `${API}`,
  withCredentials: false,
  headers: {
     Accept: "application/json",
             "Content-Type": "application/json"
    }
});

export default apiClient;