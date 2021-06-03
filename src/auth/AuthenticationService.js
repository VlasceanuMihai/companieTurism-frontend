import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { executeAuthenticationApi } from "../api/AuthApi";
import { logoutReset } from "../redux/actions/adminActions";

const USER_TOKEN = "user_token";

function AuthenticationService() {
  const history = useHistory();
  const dispatch = useDispatch();

  function createToken(token) {
    let userToken = "Bearer " + token;
    return userToken;
  }

  function executeAuthentication(username, password) {
    return executeAuthenticationApi(username, password);
  }

  function successfulLogin(username, token) {
    console.log("Successful login!");
    sessionStorage.setItem(USER_TOKEN, createToken(token));
    setupAxiosInterceptors();
  }

  function logout() {
    console.log("Successful logout!");
    sessionStorage.removeItem(USER_TOKEN);
    dispatch(logoutReset());
    history.push("/login");
  }

  function setupAxiosInterceptors() {
    axios.interceptors.request.use((config) => {
      if (isUserLoggedIn()) {
        config.headers.autohrization = sessionStorage.getItem(USER_TOKEN);
      }
      return config;
    });
  }

  function isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_TOKEN);
    if (user === null) {
      return false;
    }
    return true;
  }

  function getLoggedInUser() {
    let user = sessionStorage.getItem(USER_TOKEN);
    if (user === null) {
      return "";
    }
    return user;
  }

  return {
    executeAuthentication,
    successfulLogin,
    setupAxiosInterceptors,
    isUserLoggedIn,
    getLoggedInUser,
    logout,
  };
}

export default AuthenticationService;
