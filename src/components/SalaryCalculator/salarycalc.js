import React, { useState } from "react";
import "./salarycalc.css";
import logo from "../../assets/logo.png"; // Import the logo image

import jsPDF from "jspdf";

const SalaryCalculator = () => {
  const initialFormData = {
    basicPay: "",
    allowances: "",
    deductions: "",
    tax: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState("");
  const [pdf, setPdf] = useState(new jsPDF());
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCalculate = () => {
    const mandatoryFields = ["basicPay", "allowances", "deductions", "tax"];
    const missingFields = [];

    mandatoryFields.forEach((field) => {
      if (!formData[field]) {
        missingFields.push(field);
      }
    });

    if (missingFields.length > 0) {
      setErrorMessage(
        `Please fill out the following fields: ${missingFields.join(", ")}`
      );
    } else {
      // Perform the calculation based on your formula (you can replace this)
      const calculatedSalary =
        parseFloat(formData.basicPay) +
        parseFloat(formData.allowances) -
        parseFloat(formData.deductions);

      // Calculate tax based on the percentage
      const taxAmount = (calculatedSalary * parseFloat(formData.tax)) / 100;

      // Calculate net salary
      const netSalary = calculatedSalary - taxAmount;

      // Display the result
      setResult(netSalary.toFixed(2));

      // Clear the error message
      setErrorMessage("");

      // Show the popup
      setShowPopup(true);
    }
  };

  const handlePrint = () => {
    // Call handleCalculate to calculate the salary and set the result
    handleCalculate();

    const doc = new jsPDF();

    // Calculate the horizontal center of the page
    const pageWidth = doc.internal.pageSize.width;
    const imgWidth = 25;
    const imgX = (pageWidth - imgWidth) / 2;

    // Add hospital logo as watermark, center-aligned
    const imgHeight = 25;
    doc.addImage(logo, "PNG", imgX, 10, imgWidth, imgHeight);

    // Calculate the text width
    const text = `Net Salary: ₹${result}`;
    const textWidth =
      (doc.getStringUnitWidth(text) * doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    const textX = (pageWidth - textWidth) / 2;

    // Add salary details text, center-aligned
    doc.text(textX, imgHeight + 20, "Salary Calculation Result:");
    doc.text(textX, imgHeight + 30, text);

    // Save or download the PDF
    doc.save("Salary_Calculation_Result.pdf");
  };

  return (
    <div className="calculator-container">
      <img src={logo} alt="Company Logo" />
      <h1>Salary Calculator</h1>
      <form>
        <div className="form-group">
          <label htmlFor="basicPay">
            Basic Pay
            <span className="mandatory">*</span>
          </label>
          <input
            type="number"
            id="basicPay"
            name="basicPay"
            value={formData.basicPay}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="allowances">
            Allowances
            <span className="mandatory">*</span>
          </label>
          <input
            type="number"
            id="allowances"
            name="allowances"
            value={formData.allowances}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="deductions">
            Deductions
            <span className="mandatory">*</span>
          </label>
          <input
            type="number"
            id="deductions"
            name="deductions"
            value={formData.deductions}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tax">
            Tax (%)
            <span className="mandatory">*</span>
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
        <div className="form-buttons">
          <button type="button" onClick={handleCalculate}>
            Calculate
          </button>
          <button type="button" onClick={handlePrint}>
            Print
          </button>
        </div>
        {errorMessage && (
          <div className="error-message">
            <span role="img" aria-label="warning">
              ⚠️
            </span>{" "}
            {errorMessage}
          </div>
        )}
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            <h2>Salary Calculation Result:</h2>
            <p>Net Salary: ₹{result}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalaryCalculator;
