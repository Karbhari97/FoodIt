import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" width={150}  />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime in sunt inventore amet perspiciatis unde rerum autem eum ratione nemo!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPONY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+919764148625</li>
                <li>Karbhari.contact@Foodit.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ FoodIt.com -All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
