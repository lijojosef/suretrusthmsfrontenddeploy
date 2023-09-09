import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import './Update.css'
import Navbar from "../../Navbar/Navbar";

export default function UpdateDrug() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [drug, setDrug] = useState({
    medicineName: "",
    quantity: "",
    price: "",
  });
  const { medicineName, quantity, description, price } = drug;
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  const onHandle = (e) => {
    setDrug({ ...drug, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadDrug();
  }, []);

  const loadDrug = async () => {
    try {
      const response = await axios.get(`http://localhost:8090/stock/${id}`);
      const { medicineName, quantity, price } = response.data;
      setDrug({ medicineName, quantity, price });
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {};
      if (quantity !== "") {
        data.quantity = quantity;
      }
      if (price !== "") {
        data.price = price;
      }
  
      if (Object.keys(data).length > 0) {
        await axios.put(`http://localhost:8090/stock/${medicineName}`, data);
        setUpdateSuccess(true);
        setUpdateError(null);
        setTimeout(() => {
          setUpdateSuccess(false);
        }, 5000);
      } else {
        setUpdateError("No changes to update.");
      }
    } catch (error) {
      console.error("Axios Error:", error);
      setUpdateError("Error updating drug !");
      setUpdateSuccess(false);
    }
  };
  

  return (
   <div>
    <Navbar />
    <div className="container">
      <div className="row">
        <div >
          <p className="updateHeading">Update Drug</p>
          {updateSuccess && (
            <div className="alert">
              Drug updated successfully!
            </div>
          )}
          {updateError && (
            <div className="alert">{updateError}</div>
          )}
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="medicineName" className="form-label">
                Medicine Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Medicine Name"
                name="medicineName"
                value={medicineName}
                onChange={(e) => onHandle(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => onHandle(e)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Change Price"
                name="price"
                value={price}
                onChange={(e) => onHandle(e)}
              ></input>
            </div>
            <button type="submit" className="btn">
              Update
            </button>
           <button className="btn">
           <Link  to="/">
              Cancel
            </Link>
           </button>
          </form>
        </div>
      </div>
    </div>
   </div>
  );
}
