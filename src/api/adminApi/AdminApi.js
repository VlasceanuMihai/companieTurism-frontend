import axios from "axios";

export const BASE_API = "http://localhost:8080/api";
// const ADMIN_PATH = "/admin"

/* GET */
// Admin profile
export const getAdminProfileApi = async () => {
  return await axios.get(`${BASE_API}/admin/v1/profile`);
};

/* GET */
// Get employees by pageable
export const getEmployeesByPageableApi = async (params) => {
  return await axios.get(`${BASE_API}/admin/v1/employees`, { params });
};

/* GET */
// Get all employees
export const getAllEmployeesApi = async () => {
  return await axios.get(`${BASE_API}/admin/v1/getAllEmployees`);
};
