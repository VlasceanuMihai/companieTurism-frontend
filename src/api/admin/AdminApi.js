import axios from "axios";

export const BASE_API = "http://localhost:8080/api";
// const ADMIN_PATH = "/admin"

/* GET */
// Admin profile'
export const getAdminProfile = async () => {
  return await axios.get(`${BASE_API}/admin/v1/profile`);
};
