import React from "react";

const Footer = () => {
  return (
    <section className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col col-lg-3 footer-item">
            <h2 className="footer-title">Address</h2>
            <p>Pepsicola, Kathmandu,Nepal,</p>
          </div>
          <div className="col col-lg-3 footer-item">
          <h2 className="footer-title">Phone</h2>
            <p>Contact number</p>
            <p>9823640685</p>
            <p>9848023649</p>
          </div>
          <div className="col col-lg-3 footer-item">
          <h2 className="footer-title">Working Hour</h2>
            <p>work 10am - 5pm</p>
            <p>break time 1pm- 2pm</p>
            
          </div>
          <div className="col col-lg-3 footer-item">
          <h2 className="footer-title">Email</h2>
            <p>info@diginepal.com.np</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
