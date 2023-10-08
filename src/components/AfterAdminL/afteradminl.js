import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./afteradminl.css"; // Import your CSS file
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [calendarData, setCalendarData] = useState({
    availableDoctors: { available: 0, total: 0 },
    availableNurses: { available: 0, total: 0 },
    availableEmployees: { available: 0, total: 0 },
  });

  useEffect(() => {
    // Simulate fetching data from the database when the component mounts
    const fetchDataFromDatabase = async () => {
      // Replace with your actual data fetching logic
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading delay
      return {
        availableDoctors: { available: 3, total: 5 },
        availableNurses: { available: 5, total: 8 },
        availableEmployees: { available: 50, total: 60 },
      };
    };

    fetchDataFromDatabase()
      .then((data) => {
        setCalendarData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Hospital Logo" />
        </div>
        <div className="icons">
          <i className="logout-icon">Logout</i>
          <div className="support-icon">
            <i className="phone-icon">+91 9836195429</i>
          </div>
        </div>
      </header>

      <hr className="horizontal-line" />

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar */}

        <div className="sidebar">
          <ul>
            <li>Consultation</li>
            <li>Employee & Salary</li>
            <li>
              <Link to="/home">Employee & Salary</Link>
            </li>
            <li>Ward & Mini Theater</li>
            <li>Transport</li>
            <li>Equipment</li>
            <li>Pharmacy</li>
            <li>Lab</li>
          </ul>
        </div>

        {/* Middle Content */}
        <div className="middle-content">
          <div className="box">
            <h2>Available Doctors/Total Doctors</h2>
            <p>
              {calendarData.availableDoctors.available}/
              {calendarData.availableDoctors.total}
            </p>
          </div>
          <div className="box">
            <h2>Available Nurses/Total Nurses</h2>
            <p>
              {calendarData.availableNurses.available}/
              {calendarData.availableNurses.total}
            </p>
          </div>
          <div className="box">
            <h2>Available Employees/Total Employees</h2>
            <p>
              {calendarData.availableEmployees.available}/
              {calendarData.availableEmployees.total}
            </p>
          </div>
        </div>

        {/* Calendar */}
        <div className="right-calendar">
          <h2>Calendar</h2>
          <Calendar />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Sure Trust Health</p>
      </footer>
    </div>
  );
};

export default Dashboard;
