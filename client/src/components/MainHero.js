import React from "react";
import "./mainhero.css";
import logo from "../../src/assets/logo.png";

const MainHero = () => {
  return (
    <div className="container">
      <div className="center">
        <img src={logo} className="logo" />
        <h1 className="title">Paw Society</h1>
        <h2 className="subtitle">Sign Up</h2>
        <form>
          <div>
            <div>
              <label className="">Full Name:</label>
            </div>
            <input type="text" name="name" />
          </div>
          <div>
            <div>
              <label className="emailNum">Email or Mobile Number:</label>
            </div>
            <input type="text" name="email" />
          </div>
          <div>
            <div>
              <label className="">Password:</label>
            </div>
            <input type="text" name="password" />
          </div>
          <div>
            <button className="signupBtn" type="submit">
              Sign up
            </button>
          </div>
        </form>
        <div className="spacer">
          <h3>
            <span>Already Have an Account</span>
          </h3>
          <div>
            <button className="loginBtn">Log in</button>
          </div>
        </div>
      </div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>
    </div>
  );
};

export default MainHero;
