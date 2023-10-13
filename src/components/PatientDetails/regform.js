import React, { useState } from "react";
import "./regform.css"; // Import your CSS file
import logo from "../../assets/logo.png";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "Male",
    dob: "",
    contactNumber: "",
    age: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    relationship: "",
    bloodGroup: "",
    pastSurgery: "",
    addressLine1: "",
    addressLine2: "",
    country: "India",
    city: "Mumbai",
    postalCode: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "dob") {
      calculateAge(value);
    }
  };

  const calculateAge = (dob) => {
    const dobDate = new Date(dob);
    const currentDate = new Date();

    if (isNaN(dobDate)) {
      // Handle an invalid date of birth
      setFormData({ ...formData, age: "" });
    } else {
      const ageDate = new Date(currentDate - dobDate);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);

      setFormData({ ...formData, age: age });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleReset = () => {
    // Reset form fields to their initial values
    setFormData({
      fullName: "",
      gender: "Male",
      dob: "",
      contactNumber: "",
      age: "",
      emergencyContactName: "",
      emergencyContactNumber: "",
      relationship: "",
      bloodGroup: "",
      pastSurgery: "",
      addressLine1: "",
      addressLine2: "",
      country: "India",
      city: "Mumbai",
      postalCode: "",
      email: "",
    });
  };

  return (
    <div className="registration-form-container">
      <div className="header">
        <img src={logo} alt="Company Logo" /> <h2>Patient Registration</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="personal-information">
          <h3>Personal Information</h3>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
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
            value={formData.dob}
            onChange={handleChange}
            placeholder="Date of Birth"
            required
          />
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            required
          />
          <span>Age: {formData.age}</span>
        </div>
        <div className="emergency-contact">
          <h3>Emergency Contact</h3>
          <input
            type="text"
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleChange}
            placeholder="Emergency Contact Name"
            required
          />
          <input
            type="tel"
            name="emergencyContactNumber"
            value={formData.emergencyContactNumber}
            onChange={handleChange}
            placeholder="Emergency Contact Number"
            required
          />
          <input
            type="text"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            placeholder="Relationship"
            required
          />
        </div>
        <div className="medical-data">
          <h3>Medical Data</h3>
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            placeholder="Blood Group"
            required
          />
          <input
            type="text"
            name="pastSurgery"
            value={formData.pastSurgery}
            onChange={handleChange}
            placeholder="Past Surgery"
            required
          />
        </div>
        <div className="communication-address">
          <h3>Communication Address</h3>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            placeholder="Address Line 1"
            required
          />
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            placeholder="Address Line 2"
            required
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="India">India</option>
            {/* Add more country options here */}
          </select>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="Mumbai">Mumbai</option>
            {/* Add more city options here */}
          </select>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="buttons">
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="copyright">
        <p>&copy; 2023 Sure Trust Health</p>
      </div>
    </div>
  );
};

export default RegistrationForm;
