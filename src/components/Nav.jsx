import React from "react";
import logoDmg from "./images/logo/logo.png";
const Nav = () => {


  
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container">
    
     <img src = {logoDmg} alt="logo-Img"/>
   
        <a class="navbar-brand" href="/">
          DIGI NEPAL
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="/gallery">
                Gallery
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/services">
                Services
              </a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
