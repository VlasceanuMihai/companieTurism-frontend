import { getProfileApi, updatePasswordApi } from "../api/userApi/UserApi";
import AuthenticationService from "../auth/AuthenticationService";

function AdminService() {
  const { setupAxiosInterceptors } = AuthenticationService();

  function getProfile() {
    setupAxiosInterceptors();
    return getProfileApi();
  }

  function updatePassword(body) {
    setupAxiosInterceptors();
    return updatePasswordApi(body);
  }

  return {
    getProfile,
    updatePassword,
  };
}

export default AdminService;
