import {
  getHotelApi,
  getAllHotelsApi,
  createHotelApi,
  updateHotelApi,
  deleteHotelApi,
} from "../api/adminApi/AdminApi";
import AuthenticationService from "../auth/AuthenticationService";

function HotelAdminService() {
  const { setupAxiosInterceptors } = AuthenticationService();

  // GET
  function getAllHotels() {
    setupAxiosInterceptors();
    return getAllHotelsApi();
  }

  function getHotel(hotelId) {
    setupAxiosInterceptors();
    return getHotelApi(hotelId);
  }

  // POST
  function createHotel(body) {
    setupAxiosInterceptors();
    return createHotelApi(body);
  }

  // PUT
  function updateHotel(hotelId, body) {
    setupAxiosInterceptors();
    return updateHotelApi(hotelId, body);
  }

  // DELETE
  function deleteHotelById(hotelId) {
    setupAxiosInterceptors();
    return deleteHotelApi(hotelId);
  }

  return {
    getHotel,
    getAllHotels,
    createHotel,
    updateHotel,
    deleteHotelById,
  };
}

export default HotelAdminService;
