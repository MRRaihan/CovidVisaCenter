import React from "react";
import "../../Assets/CSS/Account/Home.css";
import logo from "../../Assets/Images/logo.png";
import BackgroundImage from "../../Assets/Images/homepage-background.png";

const Home = () => {
  return (
    <div className="container">
      <img className="background-image" src={BackgroundImage} alt="Logo" />
      <div className="showcase">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>

        <div className="text-container text-center">
          <div className="col">
            <div className="row card-div">
              <h1 className="home-card">Trusted person log in</h1>
            </div>
            <div className="row card-div">
              <h1 className="home-card">Center Administrator</h1>
            </div>
            <div className="row card-div">
              <h1 className="home-card">Center Registration</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
