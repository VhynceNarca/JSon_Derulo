import React from "react";
import "./mainhero.css";
import logo from "../../src/assets/logo.png";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MainHero = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitUser = async (e) => {
    e.preventDefault();
    axios
      .post("users/register", {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log("Creating user: ", res);
        alert("You are now registered");
        navigate("/home");
      })
      .catch((err) => console.log(err));
    console.log(user);
  };

  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="center">
        <img src={logo} className="logo" />
        <h1 className="title">Paw Society</h1>
        <h2 className="subtitle">Sign Up</h2>
        <form onSubmit={submitUser}>
          <div>
            <div>
              <label className="">Full Name:</label>
            </div>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleUser}
            />
          </div>
          <div>
            <div>
              <label className="emailNum">Email or Mobile Number:</label>
            </div>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleUser}
            />
          </div>
          <div>
            <div>
              <label className="">Password:</label>
            </div>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleUser}
            />
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
            <button className="loginBtn" onClick={() => navigate("/")}>
              Log in
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

export default MainHero;
