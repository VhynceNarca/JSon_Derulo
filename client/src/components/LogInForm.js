import React from "react";
import "./mainhero.css";
import logo from "../../src/assets/logo.png";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogInForm = () => {
  const [userDeets, setUserDeets] = useState({
    email: "",
    password: "",
  });

  const handleUserDeets = (e) => {
    setUserDeets({ ...userDeets, [e.target.name]: e.target.value });
  };

  const submitDeets = async (e) => {
    e.preventDefault();
    axios
      .post("users/login", {
        email: userDeets.email,
        password: userDeets.password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Email or Password is incorrect");
      });
    console.log(userDeets);
  };

  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="center">
        <img src={logo} className="logo" />
        <h1 className="title">Paw Society</h1>
        <h2 className="subtitle">Sign In</h2>
        <form onSubmit={submitDeets}>
          <div>
            <div>
              <label className="emailNum">Email or Mobile Number:</label>
            </div>
            <input
              type="text"
              name="email"
              value={userDeets.email}
              onChange={handleUserDeets}
            />
          </div>
          <div>
            <div>
              <label className="">Password:</label>
            </div>
            <input
              type="password"
              name="password"
              value={userDeets.password}
              onChange={handleUserDeets}
            />
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
