import { getEmployeesApi } from "../api/adminApi/AdminApi";
import AuthenticationService from "../auth/AuthenticationService";

function AdminService() {
  const { setupAxiosInterceptors } = AuthenticationService();

  function getEmployees() {
    setupAxiosInterceptors();
    return getEmployeesApi();
  }

  return {
    getEmployees,
  };
}

export default AdminService;
