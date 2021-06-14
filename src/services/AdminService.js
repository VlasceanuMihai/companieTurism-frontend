import {
  getAdminProfileApi,
  getEmployeeApi,
  getAllEmployeesApi,
  createEmployeeApi,
  updateEmployeeApi,
  deleteEmployeeApi,
} from "../api/adminApi/AdminApi";
import AuthenticationService from "../auth/AuthenticationService";

// Handle API calls
function AdminService() {
  const { setupAxiosInterceptors } = AuthenticationService();

  // GET
  function getAdminProfile() {
    setupAxiosInterceptors();
    return getAdminProfileApi();
  }

  function getEmployee(employeeId) {
    setupAxiosInterceptors();
    return getEmployeeApi(employeeId);
  }

  function getAllEmployees() {
    setupAxiosInterceptors();
    return getAllEmployeesApi();
  }

  // POST
  function createEmployee(body) {
    setupAxiosInterceptors();
    return createEmployeeApi(body);
  }

  // PUT
  function updateEmployee(employeeId, body) {
    setupAxiosInterceptors();
    return updateEmployeeApi(employeeId, body);
  }

  // DELETE
  function deleteEmployeeById(employeeId) {
    setupAxiosInterceptors();
    return deleteEmployeeApi(employeeId);
  }

  return {
    getAdminProfile,
    getEmployee,
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployeeById,
  };
}

export default AdminService;
