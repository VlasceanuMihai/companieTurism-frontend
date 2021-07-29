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

// Get hotel
export const getHotelApi = async (hotelId) => {
  return await axios.get(`${BASE_API}/admin/v1/hotel/` + hotelId);
};

// Get all hotels
export const getAllHotelsApi = async () => {
  return await axios.get(`${BASE_API}/admin/v1/getAllHotels`);
};

// Get all accommodation packages for hotel
export const getAllAccommodationPackagesApi = async (hotelId) => {
  return await axios.get(
    `${BASE_API}/admin/v1/accommodationPackages/hotel/` + hotelId
  );
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

// Create new hotel
export const createHotelApi = async (body) => {
  return await axios.post(`${BASE_API}/admin/v1/createHotel`, body);
};

// Generate totalPrice
export const generateTotalPriceApi = async (body) => {
  return await axios.post(`${BASE_API}/admin/v1/generateTotalPrice`, body);
};

// Create new accommodation package for hotel
export const createAccommodationPackageApi = async (hotelId, body) => {
  return await axios.post(
    `${BASE_API}/admin/v1/accommodationPackage/create/hotel/` + hotelId,
    body
  );
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

// Update hotel
export const updateHotelApi = async (hotelId, body) => {
  return await axios.put(`${BASE_API}/admin/v1/updateHotel/` + hotelId, body);
};

// Update accommodation package for hotel
export const updateAccommodationPackageApi = async (
  accommodationPackageId,
  body
) => {
  return await axios.put(
    `${BASE_API}/admin/v1/accommodationPackage/update/` +
      accommodationPackageId,
    body
  );
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

// Delete accommodation package for hotel
export const deleteAccommodationPackageApi = async (accommodationPackageId) => {
  return await axios.delete(
    `${BASE_API}/admin/v1/accommodationPackage/delete/` + accommodationPackageId
  );
};
