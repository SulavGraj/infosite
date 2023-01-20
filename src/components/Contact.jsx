import React from "react";
import Review from './subcomponents/Review';
import Client from './Clients';

const Contact = () => {
  return (
    <section className="contacts">
      <div className="container">
        <h2 className="section-title">Contact Form</h2>
        <div className="row">
          <div className="col col-lg-8 first">
            <h3>Get in touch with Us</h3>
            <p>Please! Fill the below form for any queries.</p>
            <form class="row g-3 col-lg-10">
              <div class="col-md-6">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="name"
                  class="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div class="col-12">
                <textarea
                  class="form-control"
                  rows={10}
                  placeholder="Your Queries or Message"
                />
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="col col-lg-4 second">
            <div className="location">
              <h3>Our Location</h3>
              <p><span>Pepsicola,</span> Kathmandu, <span>Nepal</span></p>
            </div>
            <div className="phone-num">
              <p>
                PhoneNo: <span>9823640685</span>,  <span>9848023649</span>
              </p>
            </div>
            <div className="email">
              <p>
                Email:   <span>info@diginepal.com.np</span>
              </p>
            </div>
          </div>
        </div>
      </div>
        <Review />      
        <Client />
    </section>
  );
};

export default Contact;
