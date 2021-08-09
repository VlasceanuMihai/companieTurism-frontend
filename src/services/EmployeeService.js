import { getProfileApi } from "../api/userApi/UserApi";
import AuthenticationService from "../auth/AuthenticationService";

function AdminService() {
  const { setupAxiosInterceptors } = AuthenticationService();

  function getProfile() {
    setupAxiosInterceptors();
    return getProfileApi();
  }

  return {
    getProfile,
  };
}

export default AdminService;