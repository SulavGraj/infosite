import React from "react";
import wcImg1 from "../images/wc/1.jpg";
import wcImg2 from "../images/wc/2.jpg";
import wcImg3 from "../images/wc/3.jpg";
import wcImg4 from "../images/wc/4.jpg";

const Welcome = () => {
  return (
    <section className="wc-section">
      <div className="container">
        <h2 className="section-title">Welcome to Digi Nepal</h2>
        <div className="row">
          <div className="col col-lg-8">
            <p className="wc-text-1">
              We are a modern IT company based on Kathmandu
              valley.
            </p>
            <p className="wc-text-2">
            DiGi Nepal is a complete FinTech company to enable digital ecosystem to bridge the financial inclusion in simple, affordable and secure ways since 2017.

We have a team of 20+ young professional engineers and developers all working toward a shared vision to bridge the gap of digital ecosystem and financial inclusion of the country. Our people are skilled engineers, FinTech professionals, cyber security experts, innovators and creative disruptors all working towards to achieve Smart Simple and Secured Digital Ecosystem of the Country.
    
            </p>
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={wcImg1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={wcImg2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={wcImg3} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="wc-img4">
              <img src={wcImg4} alt="wcImg4" />
            </div>
            <div className="wc-contact mt-50">
              <h3>Contacts</h3>
              <div className="wc-p">
                <p>Pepsicola, Kathmandu,Nepal</p>
                <p>info@diginepal.com.np</p>
                <p>+977 9848023649</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
