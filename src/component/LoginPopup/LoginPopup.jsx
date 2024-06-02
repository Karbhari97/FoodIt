import React from "react";
import "./LoginPopup.css";
import { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2> {currentState} </h2>
          <img
            onClick={() => {
              setLogin(false);
            }}
            src={assets.cross_icon}
            alt=""
            srcset=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name "
              required
            />
          )}

          <input
            type="email"
            name=""
            id=""
            required
            placeholder="Your Email Address"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="password"
            required
          />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account " : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>By continuing, i agree to the term of use & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new Account ? <span onClick={()=>{setCurrentState("Sign Up")}}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account ? <span onClick={()=>{setCurrentState("Login")}}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
