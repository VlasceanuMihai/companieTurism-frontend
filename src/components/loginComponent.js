import React from "react";
import "./loginComponent.css";

function LoginComponent() {
  return (
    <div className="limiter">
      <div className="login-container">
        <div className="login-wrap">
            <form className="login-form">
                <span className="login-form-title">
                    Sign In
                </span>
                <div className="wrap-input">
                    <input className="input" type="text" name="username" placeholder="Username"></input>
                    <span className="focus-input"></span>
                </div>
                <div className="wrap-input">
                    <input className="input" type="password" name="username" placeholder="Password"></input>
                    <span className="focus-input"></span>
                </div>
                <div className="forgotPassword-text">
                    <a href="" className="text1">Forgot password ?</a>

                </div>
                <div className="login-form-btn-container">
                    <button className="login-form-btn">Sign in</button>
                </div>

            </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
