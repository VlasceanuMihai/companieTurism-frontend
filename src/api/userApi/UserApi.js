// Employee profile
import axios from "axios";

export const BASE_API = "http://localhost:8080/api";

/* GET */
// Employee profile
export const getProfileApi = async () => {
  return await axios.get(`${BASE_API}/v1/profile`);
};

/* PUT */
// Update password
export const updatePasswordApi = async (body) => {
  return await axios.put("/v1/updatePassword", body);
};
