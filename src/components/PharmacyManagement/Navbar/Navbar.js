import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="mainnav">
        <div className="logo">
          <h2>
            <span>P</span>harmacy
            <span>M</span>anagement
          </h2>
        </div>
        <div className="menu-link">
          <ul>
            <li className="nav-item">
              <Link to="/pharmacyHome">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/addDrug">Add Drug</Link>
            </li>
            <li className="nav-item">
              <Link to="/drugSearch">Search Drug</Link>
            </li>       
            <li className="nav-item">
              <Link to="/bill">Billing</Link>
            </li>
            <li className="nav-item">
              <Link to="/expiry">Expiry Notification</Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className="h-section">
        <p>Welcome to Sure Trust Multispeciality Hospital</p>
      </section>
    </>
  );
}
