import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Home.css'

export default function Home() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    loadDrugs();
  }, []);

  const loadDrugs = async () => {
    const result = await axios.get("http://localhost:8090/stocks");
    setDrugs(result.data);
  };

  const deleteDrug = async (id) => {
    const result = await axios.delete(`http://localhost:8090/stock/${id}`);
    loadDrugs();
  };

  return (
    <div>
      <Navbar/>
      <div className="homeContainer">
      <div className="py">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="heading">Id</th>
              <th scope="col" className="heading">Medicine Name</th>
              <th scope="col" className="heading">Quantity</th>
              <th scope="col" className="heading">Description</th>
              <th scope="col" className="heading">Price</th>
              <th scope="col" className="heading">Action</th>
            </tr>
          </thead>
          <tbody>
            {drugs.map((drug, index) => (
              <tr key={drug.id}>
                <th scope="row">{index + 1}</th>
                <td>{drug.medicineName}</td>
                <td>{drug.quantity}</td>
                <td>{drug.description}</td>
                <td>{drug.price}</td>
                <td>
                  <button className="btn">
                  <Link
                    to={`/updateDrug/${drug.medicineName}` }                   >
                    Update
                  </Link>
                  </button>
                  <button
                    className="btn"
                    onClick={() => deleteDrug(drug.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
