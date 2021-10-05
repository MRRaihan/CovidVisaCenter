import React from "react";
import "../../Assets/CSS/Account/Home.css";
import logo from "../../Assets/Images/logo.png";
import BackgroundImage from "../../Assets/Images/homepage-background.png";
import HomeCardComponent from "../Reusable/HomeCardComponent";

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
            <HomeCardComponent title="Trusted person log in" />
            <HomeCardComponent title="Center Administrator" />
            <HomeCardComponent title="Center Registration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
