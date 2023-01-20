import React from "react";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="service-content">
          <h3 className="service-title">Dear Customers,</h3>
          <p>
            Digi Nepal offers top quality softare products as well as
            various services. We offer a variety of services and we try to
            put our utmost care & attention in fulffilling the requirements of 
            our customer.Products are created by our employees with highly efficient skills.
            All of the services provided by our company is very professional. For more
            update on our products and services contact us.
          </p>
        </div>
        <div className="service-packages">
          <h2>Packages</h2>
            <div class="row row-cols-1 row-cols-md-4 mb-4 text-center">
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3 text-white bg-dark">
                    <h4 class="my-0 fw-normal">softwares</h4>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                      <p>Are you in need to make your work easier? No Worries, Thapa RestrO will bring you the customized software for you. </p>
                      <h4>Price</h4>
                      <li>Based on project requirements</li>
            
                    </ul>
                    <a
                      href="/order"
                      class="w-100 btn btn-lg"
                    >
                      Click to Order
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3 text-white bg-dark">
                    <h4 class="my-0 fw-normal">websites</h4>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                      <p>Digi Nepal will back you up with any kind of websites. </p>
                      <h4>Types</h4>
                      <li>Ecommerce.</li>
                      <li>business</li>
                      <li>personal</li>
                      <li>company.</li>
                    </ul>
                    <a
                      href="/order"
                      class="w-100 btn btn-lg"
                    >
                      Click to Order
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3 text-white bg-dark">
                    <h4 class="my-0 fw-normal">Web applications</h4>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                    <p>Our software company  in Kathmandu will serve the most efficient web applications for you and your business. </p>
                    <h4>Types</h4>
                      <li>customized</li>
                      
                    </ul>
                    <a
                      href="/order"
                      class="w-100 btn btn-lg"
                    >
                      Click to Order
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3 text-white bg-dark">
                    <h4 class="my-0 fw-normal">Providing assistance</h4>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                    <p>you come across problems related to website, software, web application or any other problems.we are there for help</p>
                    <h4>Types</h4>
                      <li>website maintainance</li>
                      <li>software update</li>
                      <li>any bug or errors</li>
                   
                    </ul>
                    <a
                      href="/order"
                      class="w-100 btn btn-lg"
                    >
                      Click to Order
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
