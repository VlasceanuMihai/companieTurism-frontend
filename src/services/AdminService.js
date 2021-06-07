import { getEmployeesApi } from "../api/adminApi/AdminApi";
import AuthenticationService from "../auth/AuthenticationService";

function AdminService() {
  const { setupAxiosInterceptors } = AuthenticationService();

  function getEmployees(params) {
    setupAxiosInterceptors();
    return getEmployeesApi(params);
  }

  return {
    getEmployees,
  };
}

export default AdminService;
