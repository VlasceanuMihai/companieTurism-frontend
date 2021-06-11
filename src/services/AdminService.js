import {
  getAdminProfileApi,
  getEmployeesByPageableApi,
  getAllEmployeesApi,
  getAllDocumentsApi,
  getAllFlightsApi,
  getAllHotelsApi,
  createEmployeeApi,
  deleteEmployeeApi,
  deleteDocumentApi,
  deleteFlightApi,
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

  // POST
  function createEmployee(body) {
    setupAxiosInterceptors();
    return createEmployeeApi(body);
  }

  // DELETE
  function deleteEmployeeById(employeeId) {
    setupAxiosInterceptors();
    return deleteEmployeeApi(employeeId);
  }

  function deleteDocumentById(documentId) {
    setupAxiosInterceptors();
    return deleteDocumentApi(documentId);
  }

  function deleteFlightById(flightId) {
    setupAxiosInterceptors();
    return deleteFlightApi(flightId);
  }

  function deleteHotelById(hotelId) {
    setupAxiosInterceptors();
    return deleteHotelApi(hotelId);
  }

  return {
    getAdminProfile,
    getEmployeesByPageable,
    getAllEmployees,
    getAllDocuments,
    getAllFlights,
    getAllHotels,
    createEmployee,
    deleteEmployeeById,
    deleteDocumentById,
    deleteFlightById,
    deleteHotelById,
  };
}

export default AdminService;
