import {
  getAdminProfileApi,
  getEmployeesByPageableApi,
  getAllEmployeesApi,
  getAllDocumentsApi,
  getAllFlightsApi,
  getAllHotelsApi,
} from "../api/adminApi/AdminApi";
import AuthenticationService from "../auth/AuthenticationService";

function AdminService() {
  const { setupAxiosInterceptors } = AuthenticationService();

  function getAdminProfile() {
    setupAxiosInterceptors();
    return getAdminProfileApi();
  }

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

  function getAllHotels() {
    setupAxiosInterceptors();
    return getAllHotelsApi();
  }

  return {
    getAdminProfile,
    getEmployeesByPageable,
    getAllEmployees,
    getAllDocuments,
    getAllFlights,
    getAllHotels,
  };
}

export default AdminService;
