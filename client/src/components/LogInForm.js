import React from "react";
import "./mainhero.css";
import logo from "../../src/assets/logo.png";

import { useNavigate } from "react-router-dom";

const LogInForm = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="center">
        <img src={logo} className="logo" />
        <h1 className="title">Paw Society</h1>
        <h2 className="subtitle">Sign In</h2>
        <form>
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
              Log In
            </button>
          </div>
        </form>
        <div className="spacer">
          <h3>
            <span className="loginspan">New to our community</span>
          </h3>
          <div>
            <button className="loginBtn" onClick={() => navigate("/signup")}>
              Create an account
            </button>
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

export default LogInForm;
