import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./empmgmt.css"; // Import your CSS file

const SearchEmployeePopup = ({ onClose }) => {
  const [employeeId, setEmployeeId] = useState("");

  const handleEmployeeIdChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleViewClick = () => {
    // Implement the logic to view the employee details using the employeeId
    // For now, let's just log the employeeId to the console
    console.log(`Viewing employee with ID: ${employeeId}`);
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className="search-employee-popup">
      <div className="search-employee-content">
        <h2>Search Employee</h2>
        <div className="input-container">
          <label>Employee ID:</label>
          <input
            type="text"
            value={employeeId}
            onChange={handleEmployeeIdChange}
          />
        </div>
        <div className="button-container">
          <button onClick={handleViewClick}>View</button>
          <button onClick={handleCloseClick}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isViewEmployeeListOpen, setIsViewEmployeeListOpen] = useState(false); // State to track the visibility of the filter section
  const [isSearchEmployeePopupOpen, setIsSearchEmployeePopupOpen] =
    useState(false); // State to track the visibility of the search employee popup
  const [selectedFilter, setSelectedFilter] = useState("All Employees"); // State to track the selected filter

  // Function to handle the "View Employee List" menu item click
  const handleViewEmployeeListClick = () => {
    setIsViewEmployeeListOpen(!isViewEmployeeListOpen); // Toggle the visibility of the filter section
  };

  // Function to handle the "Search Employee" menu item click
  const handleSearchEmployeeClick = () => {
    setIsSearchEmployeePopupOpen(true);
  };

  // Function to handle filter selection
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  // Function to handle the "View List" button click
  const handleViewListClick = () => {
    // You can add logic here to fetch and display the employee list based on the selected filter.
    // For now, let's just log the selected filter to the console.
    console.log("Selected Filter:", selectedFilter);
  };

  // Function to handle the "Cancel" button click for the filter section
  const handleCancelClick = () => {
    setIsViewEmployeeListOpen(false); // Close the filter section
  };

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
          <li onClick={handleViewEmployeeListClick}>View Employee List</li>
          <li onClick={handleSearchEmployeeClick}>Search Employee</li>
          <li>Update Employee Info</li>
          <li>Delete Employee</li>
          <li>Get Employee Details</li>
          {/* ...other menu items... */}
        </ul>
      </div>
      {isViewEmployeeListOpen && (
        // Render the filter section when isViewEmployeeListOpen is true
        <div className="filter-section">
          <div className="filter-popup">
            <div className="filter-header">
              <h2>View Employee List</h2>
              <button className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
            <select
              value={selectedFilter}
              onChange={handleFilterChange}
              className="filter-dropdown"
            >
              <option value="All Employees">All Employees</option>
              <option value="Department wise">Department wise</option>
              {/* ...other filter options... */}
            </select>
            <Link to={`/viewemplist?filter=${selectedFilter}`}>
              <button className="view-list-button">View List</button>
            </Link>
          </div>
        </div>
      )}
      {isSearchEmployeePopupOpen && (
        // Render the SearchEmployeePopup when isSearchEmployeePopupOpen is true
        <SearchEmployeePopup
          onClose={() => setIsSearchEmployeePopupOpen(false)}
        />
      )}
      <div className="watermark">
        <img src={logo} alt="Hospital Logo" />
      </div>
    </div>
  );
};

export default HomePage;
