import React, { useState } from "react";
import "./loginComponent.css";
import AuthenticationService from "../../auth/AuthenticationService";
import { useHistory } from "react-router";

function LoginComponent() {
  const { executeAuthentication, successfulLogin } = AuthenticationService();
  let history = useHistory();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    hasLoginFailed: false,
    showSuccessMessage: false,
  });

  function handleChange(event) {
    event.preventDefault();
    setUserData((userData) => ({
      ...userData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    executeAuthentication(userData.username, userData.password)
      .then((response) => {
        console.log("response.data.token: ", response.data.token);
        successfulLogin(userData.username, response.data.token);
        history.push("/admin/employees");
        setUserData({
          username: "",
          password: "",
          hasLoginFailed: false,
          showSuccessMessage: true,
        });
      })
      .catch((error) => {
        console.log("Invalid credentials.");
        setUserData({
          username: "",
          password: "",
          hasLoginFailed: true,
          showSuccessMessage: false,
        });
      });
  }

  return (
    <div className="limiter">
      <div className="login-container">
        <div className="login-wrap">
          <form className="login-form">
            <span className="login-form-title">Sign In</span>
            <div className="wrap-input">
              <input
                className="input"
                type="email"
                name="username"
                placeholder="Username"
                required
                autoFocus
                value={userData.username}
                onChange={handleChange}
              ></input>
              <span className="focus-input"></span>
            </div>
            <div className="wrap-input">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                required
                value={userData.password}
                onChange={handleChange}
              ></input>
              <span className="focus-input"></span>
            </div>
            <div className="forgotPassword-text">
              <a href="https://google.ro" className="text1">
                Forgot password ?
              </a>
            </div>
            <div className="login-form-btn-container">
              <button className="login-form-btn" onClick={handleSubmit}>
                Sign in
              </button>
            </div>
            <div>
              {userData.hasLoginFailed && (
                <div className="alert alert-warning">
                  Invalid username/password.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
