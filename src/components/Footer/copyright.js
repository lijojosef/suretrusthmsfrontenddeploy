import React from "react";
import "./copyright.css";
{
  /*import React from "react";
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

export default Copyright;*/
}

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Sure Trust Multispecialty Hospital</h3>
          <p>Compassionate Care, Exceptional Service</p>
          <br></br>
          <p>Sreeguru towers, Second floor,</p>
          <p>Gopuram road, opp. Union bank of India,</p>
          <p>Puttaparthi, Andhra Pradesh 515134</p>
        </div>
        <div className="footer-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-social">
        <ul>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p className="message">
          &copy; 2023 Sure Trust Multispecialty Hospital
        </p>
      </div>
    </footer>
  );
};

export default Footer;
