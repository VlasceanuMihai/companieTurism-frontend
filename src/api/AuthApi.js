import axios from "axios";

export const BASE_API = "http://localhost:8080/api";
// const ADMIN_PATH = "/admin"

/* POST */
// Authenticate endpoint
export const executeAuthenticationApi = async (username, password) => {
  return await axios.post(`${BASE_API}/authenticate`, { username, password });
};
