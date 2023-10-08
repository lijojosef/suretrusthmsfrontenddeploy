import React from "react";
import "./home.css"; // Import your CSS file
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Hospital Logo" />
        </div>
        <div className="logout-button">
          <button>Logout</button>
        </div>
      </header>
      <hr className="horizontal-line" />
      <div className="menu">
        <ul>
          <li>
            <Link to="/empreg">Employee Registration</Link>
          </li>

          {/*<li>Employee Registration</li>*/}
          {/*<li>Employee Management</li>*/}
          <li>
            <Link to="/empmgmt">Employee Management</Link>
          </li>
          {/*<li>Salary Calculator</li>*/}
          <li>
            <Link to="/salarycalc">Salary Calculator</Link>
          </li>
          {/*<li>Pay Slip</li>*/}
          <li>
            <Link to="/payslip">Pay Slip</Link>
          </li>
          <li>Employee Salary Report</li>
        </ul>
      </div>
      <div className="watermark">
        <img src={logo} alt="Hospital Logo" />
      </div>
    </div>
  );
};

export default HomePage;
