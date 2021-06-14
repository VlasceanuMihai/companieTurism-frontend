import {
  getAdminProfileApi,
  getEmployeeApi,
  getEmployeesByPageableApi,
  getAllEmployeesApi,
  getAllFlightsApi,
  getAllHotelsApi,
  createEmployeeApi,
  updateEmployeeApi,
  deleteEmployeeApi,
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

  // function getDocument(documentId){
  //   setupAxiosInterceptors();
  //   return getDocumentApi();
  // }

  // function getAllDocuments() {
  //   setupAxiosInterceptors();
  //   return getAllDocumentsApi();
  // }

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
    return updateEmployeeApi(employeeId, body);
  }

  // DELETE
  function deleteEmployeeById(employeeId) {
    setupAxiosInterceptors();
    return deleteEmployeeApi(employeeId);
  }

  // function deleteDocumentById(documentId) {
  //   setupAxiosInterceptors();
  //   return deleteDocumentApi(documentId);
  // }

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
    getAllFlights,
    getAllHotels,
    createEmployee,
    updateEmployee,
    deleteEmployeeById,
    deleteFlightById,
    deleteHotelById,
  };
}

export default AdminService;
