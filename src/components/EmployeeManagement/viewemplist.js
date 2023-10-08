import React from "react";
import { useLocation } from "react-router-dom";
import "./viewemplist.css";

const ViewEmployeeList = () => {
  // Get the selected filter from the URL parameter
  const location = useLocation();
  const selectedFilter = new URLSearchParams(location.search).get("filter");

  // Define headings based on the selected filter
  const headings = {
    all: "All Employees",
    department: "Department Wise",
    designation: "Designation Wise",
    empYear: "Emp Year Wise",
    onLeave: "On Leave",
    active: "Active",
  }[selectedFilter];

  // Dummy employee data
  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      designation: "Senior Engineer",
      employmentDate: "2022-01-15",
      status: "Active",
    },
    // Add more dummy data entries here
  ];

  return (
    <div className="view-employee-list">
      <h1>{headings}</h1>
      {/* Table to display employee data */}
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Employment Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the dummy data and render rows */}
          {dummyData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.designation}</td>
              <td>{employee.employmentDate}</td>
              <td>{employee.status}</td>
              <td>
                {/* Buttons for View and Actions */}
                <button>View</button>
                <button>Actions</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEmployeeList;
