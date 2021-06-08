import {
  getEmployeesByPageableApi,
  getAllEmployeesApi,
  getAllDocumentsApi,
  getAllFlightsApi,
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

  function getAllDocuments() {
    setupAxiosInterceptors();
    return getAllDocumentsApi();
  }

  function getAllFlights() {
    setupAxiosInterceptors();
    return getAllFlightsApi();
  }

  return {
    getEmployeesByPageable,
    getAllEmployees,
    getAllDocuments,
    getAllFlights,
  };
}

export default AdminService;
