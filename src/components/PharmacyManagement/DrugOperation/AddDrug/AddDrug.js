import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import './AddDrug.css'

export default function AddDrug() {
  let navigate = useNavigate();

  const [drug, setDrug] = useState({
    medicineName: "",
    quantity: "",
    description: "",
    price:"",
  });
  const { medicineName, quantity, description , price} = drug;

  const onHandle = (e) => {
    setDrug({ ...drug, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8090/stock", drug);
      navigate("/");
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };

  return (
   <div>
     <Navbar/>
    <div className="container">
      <div className="row">
        <div >
          <p className="addHeading">Add Drug</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Medicine_name" className="form-label">
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
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Description about Medicine"
                name="description"
                value={description}
                onChange={(e) => onHandle(e)}
              ></input>
            </div>
            <div>
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the price of a medicine"
                name="price"
                value={price}
                onChange={(e) => onHandle(e)}
              ></input>
            </div>
            <button type="submit" className="btn">
              Add
            </button>
            <button className="btn">
            <Link to="/">
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
