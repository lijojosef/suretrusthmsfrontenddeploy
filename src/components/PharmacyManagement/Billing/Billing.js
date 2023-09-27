import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Billing.css";
// import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/copyright";

function Billing() {
  const [medicineName, setMedicineName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddMedicine = async () => {
    if (medicineName && quantity) {
      try {
        // Make an API request to fetch the medicine price based on the medicineName
        const response = await axios.get(
          `http://localhost:8090/medicine-price/${medicineName}`
        );

        const medicinePrice = response.data; // Assuming the response contains the medicine price

        // Create a medicine object with the retrieved price
        const medicine = {
          name: medicineName,
          quantity: parseInt(quantity),
          price: medicinePrice,
        };

        // Update the medicines array
        setMedicines([...medicines, medicine]);
        setMedicineName("");
        setQuantity("");
      } catch (error) {
        console.error("Axios Error:", error);
      }
    }
  };

  // Calculate the total bill amount
  const calculateTotalBill = () => {
    const totalBill = medicines.reduce(
      (acc, medicine) => acc + medicine.quantity * medicine.price,
      0
    );
    setTotalPrice(totalBill);
  };

  // Handle the "Print" button click
  const handlePrint = () => {
    calculateTotalBill(); // Calculate the total bill before printing
    window.print(); // Trigger the browser's print dialog after the total price is calculated
  };

  useEffect(() => {
    calculateTotalBill(); // Calculate the total bill when the component loads
  }, [medicines]);

  return (
    <div className="main-container">
      {/* <Navbar /> */}
      <div className="mainBill">
      <h2>Welcome to Sure Trust Multispeciality Hospital</h2>
      </div>
      <div className="cont">
        <div className="print-header">
          <p>Bill</p>
        </div>

        <div className="bill-body">
          <label>Medicine Name</label>
          <br />
          <input
            type="text"
            placeholder="Medicine Name"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            className="in"
          />
          <br />
          <br />
          <label>Quantity</label>
          <br />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="in"
          />
          <br />
          <br />
          <button onClick={handleAddMedicine} className="btn btn-add">
            Add
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Medicine Name</th>
              <th>Quantity</th>
              <th>Price/medicine</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{medicine.name}</td>
                <td>{medicine.quantity}</td>
                <td>{medicine.price}</td>
                <td>{medicine.quantity * medicine.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="my-3">
          <h2 className="text-4xl">Total Price: {totalPrice}</h2>
        </div>

        {/* Print button */}
        <button className="btn" onClick={handlePrint}>
          Print
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Billing;
