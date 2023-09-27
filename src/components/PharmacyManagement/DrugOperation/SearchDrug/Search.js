import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Navbar from "../../Navbar/Navbar";
import Footer from '../../../Footer/copyright';

export default function DrugSearch() {
  const [medicineName, setMedicineName] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8090/search/${medicineName}`
      );
      setResult(response.data);
      setSearched(true);
    } catch (error) {
      console.error("Error searching for drug:", error);
      setResult(false); 
      setSearched(true);
    }
  };

  const handleClear = () => {
    setMedicineName("");
    setResult(null);
    setSearched(false);
  };

  return (
    <div>
      <Navbar/>
      <div className="container">
      <div className="row">
        <div >
          <p className="search">Search a Drug</p>
          <div>
            <br/>
            <input className="searchInput"
              type="text"
              placeholder="Enter Medicine Name"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
            />
          </div>

          <br />
          <button onClick={handleSearch} className="btn">Search</button>
          <button onClick={handleClear} className="btn">Clear</button>
          {searched && (
            <p className="find">
              {result !== null
                ? result.length > 0
                  ? `Medicine Exist !`
                  : `Medicine with name "${medicineName}" does not exist.`: ""}
            </p>
          )}
          {result && result.length > 0 && (
            <ul className="name">
              {result.map((medicine) => (
                <li key={medicine.id}>
                  {`Medicine Name: ${medicine.medicineName} , Price: ${medicine.price}`}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
