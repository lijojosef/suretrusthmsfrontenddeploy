import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Billing.css";

export default function BillGenerator() {
  const [medicineName, setMedicineName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);

  const generateBill = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8090/billing/generate-bill",
        {
          medicineName: medicineName,
          quantity: parseInt(quantity),
        }
      );
      setTotalPrice(response.data);
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <h2 className="bill">Bill Generate</h2>
      <div className="container">
        <label htmlFor="medicineName" className="medicine_b">
          Medicine Name:
        </label>
        <input
          type="text"
          id="medicineName"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
        />
        <br />
        <label htmlFor="quantity" className="medicine_b">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          min="0"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br/>          
        <button className="btn" onClick={generateBill}>Generate Bill</button>
        {totalPrice !== null && (
          <div>
            <h4>Total Price: {totalPrice.toFixed(2)}</h4>
          </div>
        )}
      </div>
    </div>
  );
}
