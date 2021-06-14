import axios from "axios";

export const BASE_API = "http://localhost:8080/api";
// const ADMIN_PATH = "/admin"

/* GET */

// Admin profile
export const getAdminProfileApi = async () => {
  return await axios.get(`${BASE_API}/admin/v1/profile`);
};

// Get employee
export const getEmployeeApi = async (employeeId) => {
  return await axios.get(`${BASE_API}/admin/v1/employee/` + employeeId);
};

// Get employees by pageable
export const getEmployeesByPageableApi = async (params) => {
  return await axios.get(`${BASE_API}/admin/v1/employees`, { params });
};

// Get all employees
export const getAllEmployeesApi = async () => {
  return await axios.get(`${BASE_API}/admin/v1/getAllEmployees`);
};

// Get document
export const getDocumentApi = async (documentId) => {
  return await axios.get(`${BASE_API}/admin/v1/document/` + documentId);
};

// Get all documents
export const getAllDocumentsApi = async () => {
  return await axios.get(`${BASE_API}/admin/v1/getAllDocuments`);
};

// Get flight
export const getFlightApi = async (flightId) => {
  return await axios.get(`${BASE_API}/admin/v1/flight/` + flightId);
};

// Get all flights
export const getAllFlightsApi = async () => {
  return await axios.get(`${BASE_API}/admin/v1/flights`);
};

// Get all hotels
export const getAllHotelsApi = async () => {
  return await axios.get(`${BASE_API}/admin/v1/getAllHotels`);
};

/* POST */

// Create new employee
export const createEmployeeApi = async (body) => {
  return await axios.post(`${BASE_API}/admin/v1/createEmployee`, body);
};

// Create new document
export const createDocumentApi = async (body) => {
  return await axios.post(`${BASE_API}/admin/v1/createDocument`, body);
};

// Create new flight
export const createFlightApi = async (body) => {
  return await axios.post(`${BASE_API}/admin/v1/createFlight`, body);
};

/* PUT */

// Update employee
export const updateEmployeeApi = async (employeeId, body) => {
  return await axios.put(
    `${BASE_API}/admin/v1/updateEmployee/` + employeeId,
    body
  );
};

// Update document
export const updateDocumentApi = async (documentId, body) => {
  return await axios.put(
    `${BASE_API}/admin/v1/updateDocument/` + documentId,
    body
  );
};

// Update flight
export const updateFlightApi = async (flightId, body) => {
  return await axios.put(`${BASE_API}/admin/v1/updateFlight/` + flightId, body);
};

/* DELETE */

// Delete employee
export const deleteEmployeeApi = async (employeeId) => {
  return await axios.delete(
    `${BASE_API}/admin/v1/deleteEmployee/` + employeeId
  );
};

// Delete document
export const deleteDocumentApi = async (documentId) => {
  return await axios.delete(
    `${BASE_API}/admin/v1/deleteDocument/` + documentId
  );
};

// Delete flight
export const deleteFlightApi = async (flightId) => {
  return await axios.delete(`${BASE_API}/admin/v1/deleteFlight/` + flightId);
};

// Delete hotel
export const deleteHotelApi = async (hotelId) => {
  return await axios.delete(`${BASE_API}/admin/v1/deleteHotel/` + hotelId);
};
