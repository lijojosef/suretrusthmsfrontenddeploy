import React, { useState } from "react";
import "./patientlogin.css";
import logo from "../../assets/logo.png";
import img1 from "../../assets/img3.png";
import Copyright from "../CopyRight/copyright.js";
import { Link } from "react-router-dom";
function PatientLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMsg("Error: Enter Credentials");
    } else {
      setErrorMsg("");
      // Add your login logic here
    }
  };

  return (
    <div className="login-container">
      <div className="left-half">
        <Link to="/">
          <img src={logo} alt="Hospital Logo" className="logo" />
        </Link>
        <h1 className="login-heading">Login As Patient</h1>
        <div className="input-container">
          <label>Enter Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Enter Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="password-toggle" onClick={handlePasswordToggle}>
              {showPassword ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </span>
          </div>
        </div>
        <div className="options">
          <span className="fp">Forgot Password?</span>
          <span className="fp"></span>
          <span className="ca">
            <Link to="/regform">Create Account</Link>
          </span>
        </div>
        <button type="submit" className="submit-btn" onClick={handleLogin}>
          Submit
        </button>
        {errorMsg && <div className="error-msg">{errorMsg}</div>}
        <Copyright />
      </div>
      <div className="right-half">
        <img src={img1} alt="Background" className="background-img" />
        <h2 className="organizing-text">"Partnering In Health"</h2>
      </div>
    </div>
  );
}

export default PatientLogin;
