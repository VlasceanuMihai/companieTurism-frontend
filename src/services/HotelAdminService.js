import {
  getHotelApi,
  getAllHotelsApi,
  generateTotalPriceApi,
  createHotelApi,
  updateHotelApi,
  deleteHotelApi,
  getAllAccommodationPackagesApi,
  createAccommodationPackageApi,
  updateAccommodationPackageApi,
  deleteAccommodationPackageApi,
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

  function getAccommodationPackages(hotelId) {
    setupAxiosInterceptors();
    return getAllAccommodationPackagesApi(hotelId);
  }

  // POST
  function createHotel(body) {
    setupAxiosInterceptors();
    return createHotelApi(body);
  }

  function createAccommodationPackage(hotelId, body) {
    setupAxiosInterceptors();
    return createAccommodationPackageApi(hotelId, body);
  }

  function generateTotalPrice(body) {
    setupAxiosInterceptors();
    // console.log(body)
    return generateTotalPriceApi(body);
  }

  // PUT
  function updateHotel(hotelId, body) {
    setupAxiosInterceptors();
    return updateHotelApi(hotelId, body);
  }

  function updateAccommodationPackage(accommodationPackageId, body) {
    setupAxiosInterceptors();
    return updateAccommodationPackageApi(accommodationPackageId, body);
  }

  // DELETE
  function deleteHotelById(hotelId) {
    setupAxiosInterceptors();
    return deleteHotelApi(hotelId);
  }

  // DELETE
  function deleteAccommodationPackage(accommodationPackageId) {
    setupAxiosInterceptors();
    return deleteAccommodationPackageApi(accommodationPackageId);
  }

  return {
    getHotel,
    getAllHotels,
    generateTotalPrice,
    createHotel,
    updateHotel,
    deleteHotelById,
    getAccommodationPackages,
    createAccommodationPackage,
    updateAccommodationPackage,
    deleteAccommodationPackage,
  };
}

export default HotelAdminService;
