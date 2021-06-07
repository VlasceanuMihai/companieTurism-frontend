import {
  getEmployeesByPageableApi,
  getAllEmployeesApi,
} from "../api/adminApi/AdminApi";
import AuthenticationService from "../auth/AuthenticationService";

function AdminService() {
  const { setupAxiosInterceptors } = AuthenticationService();

  function getEmployeesByPageable(params) {
    setupAxiosInterceptors();
    return getEmployeesByPageableApi(params);
  }

  function getAllEmployees() {
    setupAxiosInterceptors();
    return getAllEmployeesApi();
  }

  return {
    getEmployeesByPageable,
    getAllEmployees,
  };
}

export default AdminService;
