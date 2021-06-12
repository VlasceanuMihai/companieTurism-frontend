import {
  getAdminProfileApi,
  getEmployeeApi,
  getEmployeesByPageableApi,
  getAllEmployeesApi,
  getAllDocumentsApi,
  getAllFlightsApi,
  getAllHotelsApi,
  createEmployeeApi,
  updateEmployeeApi,
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

  // PUT
  function updateEmployee(employeeId, body) {
    setupAxiosInterceptors();
    console.log("EmployeeId: " + employeeId);
    return updateEmployeeApi(employeeId, body);
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
    getEmployee,
    getEmployeesByPageable,
    getAllEmployees,
    getAllDocuments,
    getAllFlights,
    getAllHotels,
    createEmployee,
    updateEmployee,
    deleteEmployeeById,
    deleteDocumentById,
    deleteFlightById,
    deleteHotelById,
  };
}

export default AdminService;
