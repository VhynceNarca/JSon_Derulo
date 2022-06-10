import React from "react";
import "./mainheroimage.css";
import doggy from "../assets/doggy.png";

const MainHeroImg = () => {
  return (
    <div className="imagecontainer">
      <img className="img" src={doggy} />
    </div>
  );
};

export default MainHeroImg;
