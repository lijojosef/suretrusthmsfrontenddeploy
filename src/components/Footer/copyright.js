import React from "react";
import "./copyright.css";

function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright-container">
      <p className="text">
        &copy; {currentYear} Sure Trust Super Specialty Hospital. All rights
        reserved.
      </p>
    </div>
  );
}

export default Copyright;
