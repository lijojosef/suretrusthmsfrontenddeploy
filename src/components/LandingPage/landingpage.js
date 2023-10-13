import React from "react";
import "./landingpage.css";
import logoImage from "../../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import SlidingBanners from "../SlidingBanners/slidingbanners.js";
function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo-container">
          <img src={logoImage} alt="Hospital Logo" className="logo" />
          <div className="hospital-info">
            <h1 className="hospital-name">
              Sure Trust Multispecialty Hospital
            </h1>
            <p className="tagline">Compassionate Care & Exceptional Service</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="phone">
            <i className="fas fa-phone fas fa-user fa-icon"></i>
            <p className="phonenumber">+91 6295445426</p>
          </div>
          <div className="ambulance">
            <i className="fas fa-ambulance fas fa-ambulance fa-icon"></i>
            <p className="phonenumber">+91 9834678910</p>
          </div>
        </div>
      </header>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="dropdown">
            {/*<a href="/">Login</a>*/}
            <a href="/">
              <i className="fas fa-user fa-icon user-icon"></i>{" "}
            </a>

            {/* This will render the user icon */}
            <ul className="dropdown-menu">
              <li>
                <Link to="/adminlogin">Admin Login</Link>
              </li>
              <li>
                <Link to="/doctorlogin">Doctor Login</Link>
              </li>
              <li>
                <Link to="/patientlogin">Patient Login</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li className="dropdown">
            <a href="/">Specialist</a>
            <ul className="dropdown-menu">
              <li>
                <a href="/">Option 1</a>
              </li>
              <li>
                <a href="/">Option 2</a>
              </li>
              <li>
                <a href="/">Option 3</a>
              </li>
              <li>
                <a href="/">Option 4</a>
              </li>
              <li>
                <a href="/">Option 5</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="/">Services</a>
            <ul className="dropdown-menu">
              <li>
                <a href="/">Option 1</a>
              </li>
              <li>
                <a href="/">Option 2</a>
              </li>
              <li>
                <a href="/">Option 3</a>
              </li>
              <li>
                <a href="/">Option 4</a>
              </li>
              <li>
                <a href="/">Option 5</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="/">Doctor</a>
            <ul className="dropdown-menu">
              <li>
                <a href="/">Option 1</a>
              </li>
              <li>
                <a href="/">Option 2</a>
              </li>
              <li>
                <a href="/">Option 3</a>
              </li>
              <li>
                <a href="/">Option 4</a>
              </li>
              <li>
                <a href="/">Option 5</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <SlidingBanners />

      {/* Rest of the LandingPage component */}
    </div>
  );
}

export default LandingPage;
