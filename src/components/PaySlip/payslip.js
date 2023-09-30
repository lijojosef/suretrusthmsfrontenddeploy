import React, { useState } from "react";
import "./payslip.css"; // Import your CSS styles here
import jsPDF from "jspdf";
import logo from "../../assets/logo.png"; // Import your hospital logo here

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const PayslipGenerator = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [showPayslip, setShowPayslip] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSpecialEmployee, setIsSpecialEmployee] = useState(false);
  const [payslipData, setPayslipData] = useState(null);

  const handleGeneratePayslip = () => {
    if (employeeId === "0x0x0x") {
      setShowPayslip(true);
      setShowError(false);
      setIsSpecialEmployee(true);
    } else {
      fetch(`apiEndpoint/employees/${employeeId}/payslip`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setShowPayslip(false);
            setShowError(true);
          } else {
            setPayslipData(data);
            setShowPayslip(true);
            setShowError(false);
            setIsSpecialEmployee(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching data from the backend:", error);
          setShowPayslip(false);
          setShowError(true);
        });
    }
  };

  const handleReset = () => {
    setEmployeeId("");
    setSelectedMonth("");
    setSelectedYear("");
    setShowPayslip(false);
    setShowError(false);
    setIsSpecialEmployee(false);
  };

  const handleDownloadPayslip = () => {
    const doc = new jsPDF();

    // Calculate the center coordinates of the page
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const centerX = pageWidth / 2;
    const centerY = pageHeight / 2;

    // Add the hospital logo as an image at the center
    const imgData = logo; // Assuming 'logo' contains the image data or URL
    const logoWidth = 35; // Adjust the logo width as needed
    const logoHeight = 35; // Adjust the logo height as needed
    const logoX = centerX - logoWidth / 2;
    const logoY = centerY - logoHeight / 2 - 120; // Position it slightly above the center
    doc.addImage(imgData, "JPEG", logoX, logoY, logoWidth, logoHeight);

    // Define the rest of the content
    const selectedMonthName = monthNames[selectedMonth - 1];
    const pdfContent = `
      Payslip for the month ${selectedMonthName} ${selectedYear}
  
      Employee ID: ${employeeId}
      Employee Name: ${
        isSpecialEmployee ? "John Doe" : payslipData.employeeName
      }
      Date Of Joining: ${
        isSpecialEmployee ? "01/01/2022" : payslipData.dateOfJoining
      }
      Organization Name: ${
        isSpecialEmployee
          ? "Sure Trust Multispeciality Hospital"
          : payslipData.organizationName
      }
      Designation: ${
        isSpecialEmployee ? "Senior Nurse" : payslipData.designation
      }
      Financial Year: ${
        isSpecialEmployee ? "2023-2024" : payslipData.financialYear
      }
  
      Earnings          Amount          Deductions        Amount
      Basic             $${
        isSpecialEmployee ? "5000.00" : payslipData.earnings.basic.toFixed(2)
      }
      Provident Fund    $${
        isSpecialEmployee
          ? "500.00"
          : payslipData.deductions.providentFund.toFixed(2)
      }
      Incentive Pay      $${
        isSpecialEmployee
          ? "1000.00"
          : payslipData.earnings.incentivePay.toFixed(2)
      }
      Professional Tax  $${
        isSpecialEmployee
          ? "100.00"
          : payslipData.deductions.professionalTax.toFixed(2)
      }
  
      Net Pay: $${
        isSpecialEmployee
          ? "4400.00"
          : (
              payslipData.earnings.basic -
              payslipData.deductions.providentFund -
              payslipData.deductions.professionalTax
            ).toFixed(2)
      }
  
      This is a system-generated payslip.
    `;

    // Calculate the height of the text content
    const textHeight = doc.getTextDimensions(pdfContent, {
      maxWidth: pageWidth - 40,
    }).h;

    // Position the text content at the center
    const textX = 20; // Left margin
    const textY = centerY - textHeight / 2;

    doc.text(pdfContent, textX, textY);

    // Add the hospital address just below the logo
    //const hospitalAddress =
    // "Sreeguru towers, Second floor, Gopuram road, opp. Union bank of India, Puttaparthi, Andhra Pradesh 515134";
    //const addressWidth =
    //doc.getStringUnitWidth(hospitalAddress) * doc.internal.getFontSize();
    //const addressX = centerX - addressWidth / 2;
    //const addressY = logoY + logoHeight + 10; // Position it just below the logo

    //doc.text(hospitalAddress, addressX, addressY);
    //.setFontSize(10);
    doc.save("Payslip.pdf");
  };

  return (
    <div className="payslip-container">
      <img src={logo} alt="Company Logo" />
      <h1>Payslip Generator</h1>
      <div className="input-section">
        <label htmlFor="employeeId">Employee ID</label>
        <input
          type="text"
          id="employeeId"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <label htmlFor="selectedMonth">Month</label>
        <select
          id="selectedMonth"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">Select Month</option>
          {Array.from({ length: 12 }, (_, index) => (
            <option key={index} value={index + 1}>
              {new Date(0, index).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>

        <label htmlFor="selectedYear">Year</label>
        <select
          id="selectedYear"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {Array.from({ length: 191 }, (_, i) => (
            <option key={i} value={i + 1900}>
              {i + 1900}
            </option>
          ))}
        </select>
      </div>
      <div className="button-section">
        <button onClick={handleGeneratePayslip}>Generate Payslip</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {showError && (
        <div className="error-message">
          <span role="img" aria-label="Warning">
            {/*⚠️*/}
          </span>{" "}
          {isSpecialEmployee ? "" : "⚠️Invalid Employee ID"}
        </div>
      )}

      {showPayslip && (
        <div className="pay-slip-overview">
          <img src={logo} alt="Hospital Logo" />
          <p>
            Sreeguru towers, Second floor, Gopuram road, opp. Union bank of
            India, Puttaparthi, Andhra Pradesh 515134
          </p>
          <h2>
            Payslip for the month {monthNames[parseInt(selectedMonth, 10) - 1]}{" "}
            {selectedYear}
          </h2>
          <p>Employee ID: {employeeId}</p>
          <p>
            Employee Name:{" "}
            {isSpecialEmployee ? "John Doe" : payslipData.employeeName}
          </p>
          <p>
            Date Of Joining:{" "}
            {isSpecialEmployee ? "01/01/2022" : payslipData.dateOfJoining}
          </p>
          <p>
            Organization Name:{" "}
            {isSpecialEmployee
              ? "Sure Trust Multispeciality Hospital"
              : payslipData.organizationName}
          </p>
          <p>
            Designation:{" "}
            {isSpecialEmployee ? "Senior Nurse" : payslipData.designation}
          </p>
          <p>
            Financial Year:{" "}
            {isSpecialEmployee ? "2023-2024" : payslipData.financialYear}
          </p>
          <table>
            <thead>
              <tr>
                <th>Earnings</th>
                <th>Amount</th>
                <th>Deductions</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic</td>
                <td>
                  $
                  {isSpecialEmployee
                    ? "5000.00"
                    : payslipData.earnings.basic.toFixed(2)}
                </td>
                <td>Provident Fund</td>
                <td>
                  $
                  {isSpecialEmployee
                    ? "500.00"
                    : payslipData.deductions.providentFund.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>Incentive Pay</td>
                <td>
                  $
                  {isSpecialEmployee
                    ? "1000.00"
                    : payslipData.earnings.incentivePay.toFixed(2)}
                </td>
                <td>Professional Tax</td>
                <td>
                  $
                  {isSpecialEmployee
                    ? "100.00"
                    : payslipData.deductions.professionalTax.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Net Pay: $
            {isSpecialEmployee
              ? "4400.00"
              : (
                  payslipData.earnings.basic -
                  payslipData.deductions.providentFund -
                  payslipData.deductions.professionalTax
                ).toFixed(2)}
          </p>
          <p>This is a system-generated payslip.</p>
          <div className="download-buttons">
            <button onClick={handleDownloadPayslip}>Download Payslip</button>
            <button onClick={handleReset}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayslipGenerator;
