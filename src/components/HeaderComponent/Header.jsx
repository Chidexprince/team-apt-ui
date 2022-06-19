import React from "react";
import logo from "../../images/logo.svg";
import calendarIcon from '../../images/calendar-icon.svg'

import "./Header.css";

export const Header = () => {
  return (
    <nav className="nav-header">
      <img src={logo} alt="logo" />
      <div className="icon-container">
        <img src={calendarIcon} alt="calendar-icon" />
        <div className="date-container">
          <h3>Day 1</h3> 
          <span>of 5</span>
        </div>
      </div>
    </nav>
  );
};