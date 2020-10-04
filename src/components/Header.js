import React from "react";
import "../stylesheets/Header.scss";
import Kompass from "../images/Kompass.svg";

const Header = () => {
  return (
    <div className="header--wrapper">
      <div className="header--animation_wrap">
        <img className="header--img" src={Kompass} alt="bread projects" />
      </div>
    </div>
  );
};

export default Header;
