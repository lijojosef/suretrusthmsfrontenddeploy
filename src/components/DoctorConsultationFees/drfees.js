import React, { useState } from "react";
import "./drfees.css";
import logo from "../../assets/logo.png";
import jsPDF from "jspdf";
//import "./Modal.css"; // Make sure to create a CSS file for styling your modal

const Modal = ({ isOpen, totalCost, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Total Cost</h2>
        <p>Total Cost: ${totalCost}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const PaymentReceipt = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    doctor: "Dr. A",
    consultationFees: 100, // You can set a random fee
    medicationFees: "",
    otherInformation: "",
  });

  const [totalCost, setTotalCost] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const calculateTotalCost = () => {
    const total =
      formData.consultationFees + parseFloat(formData.medicationFees);
    setTotalCost(total);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const generateReceipt = () => {
    const doc = new jsPDF();
    doc.text("Payment Receipt", 80, 15);
    doc.addImage(logo, "PNG", 10, 20, 30, 30);
    doc.text(`Patient Name: ${formData.patientName}`, 10, 60);
    doc.text(`Consulting Doctor: ${formData.doctor}`, 10, 70);
    doc.text(`Consultation Fees: $${formData.consultationFees}`, 10, 80);
    doc.text(`Medication Fees: $${formData.medicationFees}`, 10, 90);
    doc.text(`Other Information: ${formData.otherInformation}`, 10, 100);
    doc.text(`Total Cost: $${totalCost}`, 10, 110);
    doc.save("payment_receipt.pdf");
  };

  return (
    <div className="receipt-container">
      <img src={logo} alt="Company Logo" />
      <h1>Payment Receipt</h1>
      <div className="form-group">
        <label>Name Of The Patient:</label>
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={(e) =>
            setFormData({ ...formData, patientName: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label>Consulting Doctor:</label>
        <select
          name="doctor"
          value={formData.doctor}
          onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
        >
          <option value="Dr. A">Dr. A</option>
          <option value="Dr. B">Dr. B</option>
          <option value="Dr. C">Dr. C</option>
          <option value="Dr. D">Dr. D</option>
        </select>
      </div>
      <div className="form-group">
        <label>Consultation Fees:</label>
        <input
          type="number"
          name="consultationFees"
          value={formData.consultationFees}
          onChange={(e) =>
            setFormData({
              ...formData,
              consultationFees: parseFloat(e.target.value),
            })
          }
        />
      </div>
      <div className="form-group">
        <label>Medication Fees:</label>
        <input
          type="number"
          name="medicationFees"
          value={formData.medicationFees}
          onChange={(e) =>
            setFormData({ ...formData, medicationFees: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label>Other Information:</label>
        <textarea
          name="otherInformation"
          value={formData.otherInformation}
          onChange={(e) =>
            setFormData({ ...formData, otherInformation: e.target.value })
          }
        />
      </div>
      <button onClick={calculateTotalCost}>Calculate</button>
      <button onClick={generateReceipt}>Download</button>
      <button onClick={() => window.location.reload()}>Cancel</button>
      <Modal isOpen={isModalOpen} totalCost={totalCost} onClose={closeModal} />
      <div className="copyright">
        <p>&copy; 2023 Sure Trust Health</p>
      </div>
    </div>
  );
};

export default PaymentReceipt;
