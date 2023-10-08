import React, { useState } from "react";
import "./empreg.css";
import logo from "../../assets/logo.png";

const EmployeeRegistration = () => {
  const initialFormData = {
    phoneNumber: "",
    empDate: "",
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    postCode: "",
    city: "",
    country: "",
    email: "",
    tax: "",
    salaryType: "",
    salary: "",
    bankName: "",
    clearingNumber: "",
    accountNumber: "",
    socialSecurity: "",
  };
  const [formData, setFormData] = useState({
    phoneNumber: "",
    empDate: "",
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    postCode: "",
    city: "",
    country: "",
    email: "",
    tax: "",
    salaryType: "",
    salary: "",
    bankName: "",
    clearingNumber: "",
    accountNumber: "",
    socialSecurity: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mandatoryFields = [
      "phoneNumber",
      "empDate",
      "firstName",
      "lastName",
      "address",
      "postCode",
      "city",
      "country",
      "email",
      "tax",
      "salaryType",
      "salary",
      "bankName",
    ];

    const missingFields = mandatoryFields.filter((field) => !formData[field]);

    if ((missingFields.length = 0)) {
      setErrorMessage("Error: Missing Data");
    } else {
      // Submit the form or perform desired action
      // Reset the form
      setFormData({
        phoneNumber: "",
        empDate: "",
        firstName: "",
        middleName: "",
        lastName: "",
        address: "",
        postCode: "",
        city: "",
        country: "",
        email: "",
        tax: "",
        salaryType: "",
        salary: "",
        bankName: "",
        clearingNumber: "",
        accountNumber: "",
        socialSecurity: "",
      });
      setErrorMessage("");
    }
  };

  return (
    <div className="registration-container">
      <img src={logo} alt="Company Logo" />
      <h1>Employee Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phoneNumber">
              Phone Number <span className="mandatory">*</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="empDate">
              Emp Date <span className="mandatory">*</span>
            </label>
            <input
              type="date"
              id="empDate"
              name="empDate"
              value={formData.empDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Continue creating form groups for other fields */}

        <div className="form-group">
          <label htmlFor="firstName">
            First Name <span className="mandatory">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="middleName">Middle Name</label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">
              Last Name <span className="mandatory">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address">
              Address <span className="mandatory">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="postCode">
              Post Code <span className="mandatory">*</span>
            </label>
            <input
              type="text"
              id="postCode"
              name="postCode"
              value={formData.postCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">
              City <span className="mandatory">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">
              Country <span className="mandatory">*</span>
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              <option value="USA">India</option>
              <option value="Canada">Canada</option>
              {/* Add more countries as needed */}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">
              Email <span className="mandatory">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tax">
              Tax(%) <span className="mandatory">*</span>
            </label>
            <input
              type="number"
              id="tax"
              name="tax"
              value={formData.tax}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="salaryType">
              Salary Type <span className="mandatory">*</span>
            </label>
            <select
              id="salaryType"
              name="salaryType"
              value={formData.salaryType}
              onChange={handleChange}
              required
            >
              <option value="">Select Salary Type</option>
              <option value="Hourly">Hourly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="salary">
              Salary <span className="mandatory">*</span>
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="bankName">
              Bank Name <span className="mandatory">*</span>
            </label>
            <select
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              required
            >
              <option value="">Select Bank</option>
              <option value="Bank A">Bank A</option>
              <option value="Bank B">Bank B</option>
              {/* Add more banks as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="clearingNumber">Clearing Number</label>
            <input
              type="text"
              id="clearingNumber"
              name="clearingNumber"
              value={formData.clearingNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="socialSecurity">Social Security</label>
            <input
              type="text"
              id="socialSecurity"
              name="socialSecurity"
              value={formData.socialSecurity}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Add Submit and Reset buttons */}
        <div className="form-buttons">
          <button type="submit">Submit</button>
          {/*<button type="reset">Reset</button>*/}
          <button type="reset" onClick={() => setFormData(initialFormData)}>
            Reset
          </button>
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default EmployeeRegistration;
