import React from "react";
import "./HomePage.css";
import Navbar from "../Navbar/Navbar";
import HeroCard1 from "../../assets/img/herocard1.png";
import HeroCard2 from "../../assets/img/herocard2.png";
import HomeHeader from "../Atomic Components/HomeHeaders/HomeHeader";
import { newArrival } from "../../util";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-hero"></div>
      <div className="homepage-container2">
        <div className="homepage-card-section">
          <img src={HeroCard1} alt="" />
          <img src={HeroCard2} alt="" />
        </div>

        <div>
          <HomeHeader text="New Arrival" />

          <div className="new-arrival-container">
            {newArrival.map((item) => {
              return (
                <div key={item.id} className="new-arrival-card">
                  <img src={item.img} alt="" />

                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
