import React from "react";
import "./loginComponent.css";

function LoginComponent() {
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
              ></input>
              <span className="focus-input"></span>
            </div>
            <div className="wrap-input">
              <input
                className="input"
                type="password"
                name="username"
                placeholder="Password"
                required
                autoFocus
              ></input>
              <span className="focus-input"></span>
            </div>
            <div className="forgotPassword-text">
              <a href="https://google.ro" className="text1">
                Forgot password ?
              </a>
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

// id="email"
//               name="email"
//               type="email"
//               label="Email"
//               variant="standard"
//               margin="normal"
//               required
//               fullWidth
//               autoComplete="email"
//               autoFocus
//               value={userData.email}
//               onChange={handleChange}
//             />
//             <TextField
//               id="password"
//               name="password"
//               type="password"
//               label="Password"
//               variant="standard"
//               margin="normal"
//               required
//               fullWidth
//               autoComplete="current-password"
//               value={userData.password}
//               onChange={handleChange}
