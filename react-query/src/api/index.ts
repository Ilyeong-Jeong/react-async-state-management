import { httpClient } from "@/http";

class API {
  static baseURL = import.meta.env.VITE_BASE_URL;

  static getRestData() {
    return httpClient.get(`${API.baseURL}/api/users`);
  } 
}

export default API;
