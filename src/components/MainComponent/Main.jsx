import React from "react";
import rocketIcon from '../../images/rocket-icon.svg';
import bulbIcon from '../../images/light.svg';
import "./Main.css";



export const Main = () => {
  return (
    <section className="main-container">
      <div className="top-stars"></div>
      <div className="main-heading">
        <span> Unlock to </span>
        <span className="bold-text"> Power your dreams! </span>
      </div>
      <div className="sub-heading">
        <span> Stand a chance to win </span> <b>N3,000,000</b> everyday for
        the next 5 days
      </div>
      <div class="direction-card">
        <div className="title">
          <span>
            <img src={rocketIcon} alt="rocket-icon" />
            How To Play
          </span> 
        </div>
        <div>
          <div className="direction-list">
            <ol>
              <li>Guess the right combination of numbers</li>
              <li>Win <b>N3,000,000</b> instantly
              </li>
            </ol>
            <p>Sounds unbelievable? Well, guess right & see for yourself!</p>
          </div>
          <div className="hint-card">
            <span className="hint-icon"><img src={bulbIcon} alt="bulb-icon" /></span>
            <div className="hint-details">
              Think well before you guess. You have only <b>2</b> attempts per
              day and even after you win, you can come back the next day to try
              for another jackpot!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
