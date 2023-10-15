import React, { useState } from "react";
import "./draptmt.css";
import logo from "../../assets/logo.png";

const DoctorAppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "Male",
    dob: "",
    contactNumber: "",
    bloodGroup: "",
    allergies: "",
    pastSurgery: "",
    addressLine1: "",
    addressLine2: "",
    country: "India",
    city: "Mumbai",
    postalCode: "",
    email: "",
    preferredDoctor: "a",
    reasonForVisit: "",
    date: "",
    session: "Morning",
    visitMode: "In Person",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="form-container">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" />
        <h1>Doctor's Appointment</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="section-heading">Patient Information</div>
        <div className="form-group">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="date"
            name="dob"
            placeholder="Date Of Birth"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="section-heading">Medical Data</div>
        <div className="form-group">
          <input
            type="text"
            name="bloodGroup"
            placeholder="Blood Group"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="allergies"
            placeholder="Any Allergies"
            value={formData.allergies}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="pastSurgery"
            placeholder="Past Surgery"
            value={formData.pastSurgery}
            onChange={handleChange}
            required
          />
        </div>
        <div className="section-heading">Communication Address</div>
        <div className="form-group">
          <input
            type="text"
            name="addressLine1"
            placeholder="Address Line 1"
            value={formData.addressLine1}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="addressLine2"
            placeholder="Address Line 2"
            value={formData.addressLine2}
            onChange={handleChange}
            required
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="India">India</option>
            {/* Add more country options as needed */}
          </select>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="Mumbai">Mumbai</option>
            {/* Add more city options as needed */}
          </select>
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="section-heading">Appointment Details</div>
        <div className="form-group">
          <select
            name="preferredDoctor"
            value={formData.preferredDoctor}
            onChange={handleChange}
            required
          >
            <option value="a">Doctor A</option>
            <option value="b">Doctor B</option>
            <option value="c">Doctor C</option>
            <option value="d">Doctor D</option>
            <option value="e">Doctor E</option>
            <option value="f">Doctor F</option>
          </select>
          <input
            type="text"
            name="reasonForVisit"
            placeholder="Reason for Visit"
            value={formData.reasonForVisit}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <select
            name="session"
            value={formData.session}
            onChange={handleChange}
            required
          >
            <option value="Morning">Morning</option>
            <option value="Noon">Noon</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>
        <div className="section-heading">Preferred Visit Mode</div>
        <div className="form-group">
          <label>
            <input
              type="radio"
              name="visitMode"
              value="In Person"
              checked={formData.visitMode === "In Person"}
              onChange={handleChange}
            />
            In Person
          </label>
          <label>
            <input
              type="radio"
              name="visitMode"
              value="Tele-health"
              checked={formData.visitMode === "Tele-health"}
              onChange={handleChange}
            />
            Tele-health
          </label>
        </div>
        <div className="button-container">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div className="copyright">Copyright © 2023 Sure Trust Health</div>
    </div>
  );
};

export default DoctorAppointmentForm;
