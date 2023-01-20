import React from "react";


const AboutIntro = () => {
  return (
    <section className="aboutIntro-section">
      <div className="container">
        <h2 className="section-title">Welcome to Digi Nepal</h2>
        <div className="about-intro">
          <p className="about-intro-text1">
          We are a modern IT company based on Kathmandu
            valley.
          </p>
          <p className="about-intro-text2">
          DiGi Nepal is a complete FinTech company to enable digital ecosystem to bridge the financial inclusion in simple, affordable and secure ways since 2017.

We have a team of 20+ young professional engineers and developers all working toward a shared vision to bridge the gap of digital ecosystem and financial inclusion of the country. Our people are skilled engineers, FinTech professionals, cyber security experts, innovators and creative disruptors all working towards to achieve Smart Simple and Secured Digital Ecosystem of the Country.
          </p>
        </div>
        <hr />
        <br /><br />
        <div className="vision-mission">
          <h2 className="vm-title">The beginning</h2>
          <div className="row">
            <div className="col col-lg-6">
              <div className="our-mission">
                <h2>Our Mission</h2>
                <p>Connect People and Bridge the Digital Ecosystem of the Nepal.</p>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="our-vision">
                <h2>Our Vision</h2>
                <p>
                Build Smart Simple and Secured Digital Ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
