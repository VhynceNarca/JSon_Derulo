import React from "react";
import "../components/mainhero.css";

import LogInForm from "../components/LogInForm";
import MainHeroImg from "../components/MainHeroImage";

const LogIn = () => {
  return (
    <div className="mainhero">
      <LogInForm />
      <MainHeroImg />
    </div>
  );
};

export default LogIn;
