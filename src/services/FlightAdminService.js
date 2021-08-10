import {
  getFlightApi,
  getFlightsApi,
  createFlightApi,
  updateFlightApi,
  deleteFlightApi,
} from "../api/adminApi/AdminApi";
import AuthenticationService from "../auth/AuthenticationService";

function FlightAdminService() {
  const { setupAxiosInterceptors } = AuthenticationService();

  // GET
  function getFlight(flightId) {
    setupAxiosInterceptors();
    return getFlightApi(flightId);
  }

  function getAllFlights() {
    setupAxiosInterceptors();
    return getFlightsApi();
  }

  // POST
  function createFlight(body) {
    setupAxiosInterceptors();
    return createFlightApi(body);
  }

  // PUT
  function updateFlight(flightId, body) {
    setupAxiosInterceptors();
    return updateFlightApi(flightId, body);
  }

  // DELETE
  function deleteFlightById(flightId) {
    setupAxiosInterceptors();
    return deleteFlightApi(flightId);
  }

  return {
    getFlight,
    getAllFlights,
    createFlight,
    updateFlight,
    deleteFlightById,
  };
}

export default FlightAdminService;
