import {
  getAdminProfileApi,
  getEmployeeApi,
  getEmployeesByPageableApi,
  getAllEmployeesApi,
  getAllHotelsApi,
  createEmployeeApi,
  updateEmployeeApi,
  deleteEmployeeApi,
  deleteHotelApi,
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

  function getEmployeesByPageable(params) {
    setupAxiosInterceptors();
    return getEmployeesByPageableApi(params);
  }

  function getAllEmployees() {
    setupAxiosInterceptors();
    return getAllEmployeesApi();
  }

  function getAllHotels() {
    setupAxiosInterceptors();
    return getAllHotelsApi();
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

  function deleteHotelById(hotelId) {
    setupAxiosInterceptors();
    return deleteHotelApi(hotelId);
  }

  return {
    getAdminProfile,
    getEmployee,
    getEmployeesByPageable,
    getAllEmployees,
    getAllHotels,
    createEmployee,
    updateEmployee,
    deleteEmployeeById,
    deleteHotelById,
  };
}

export default AdminService;
