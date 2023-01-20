import React from "react";

import Banner from "./subcomponents/Banner";
import Event1 from "./subcomponents/Event1";
import Gallery1 from "./subcomponents/Gallery1";
import Review from "./subcomponents/Review";
import Welcome from "./subcomponents/Welcome";

const Home = () => {
  return (
    <div className="home">
    <Banner /> 
      <div className="heading">
        <h1 className="head-title">
          <span>D</span>igi NepaL
        </h1>
      </div>
      <Welcome />
      
      <Gallery1 />
      <Event1 />
      <Review />
    </div>
  );
};

export default Home;
