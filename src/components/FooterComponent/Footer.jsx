import React from "react";
import Arrow from "../../images/arrow.png";
import coinStack from "../../images/coin-stack.png";
import leftCoin from "../../images/left-coin.png";
import rightCoin from "../../images/right-coin.png";
import star from "../../images/star.png"
import "./Footer.css";

export const Footer = () => {
    return (
        <footer>
            <button className="cta">
                <p>Play The Game</p>
                <img src={Arrow} alt="forward-arrow" />
            </button>
            <div className="coin-container">
                <img className="left-coin" src={leftCoin} alt="A gold coin" />
                <img className="coin-stack" src={coinStack} alt="A stack of gold coins" />
                <img className="right-coin" src={rightCoin} alt="A gold coin" />
                <div className="sun-rays">
                    <p className="ray one"></p>
                    <p className="ray two"></p>
                    <p className="ray three"></p>
                    <p className="ray four"></p>
                    <p className="ray five"></p>
                    <p className="ray six"></p>
                </div>
                <img className="star first" src={star} alt="Small star" />
                <img className="star second" src={star} alt="Small star" />
                <img className="star third" src={star} alt="Small star" />
                <img className="star fourth" src={star} alt="Small star" />
            </div>
        </footer>
    )
}