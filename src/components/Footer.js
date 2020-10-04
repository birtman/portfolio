import React from "react";
import "../stylesheets/Footer.scss";
import { Link } from "react-router-dom";
import Kompass from "../images/Kompass.svg";

export default function Footer() {
  return (
    <div className="footer--wrapper">
      <div className="footer_left">
        <p className="footer--p">Birte Spreuer</p>
        <span className="footer--span">Saarbrücken</span>
        <span className="footer--span">Amsterdam</span>
      </div>
      <div className="footer_right">
        <p className="footer--p">Links</p>
        <Link to="/imprint" className="footer--span">
          Imprint
        </Link>
        <Link to="/privacy" className="footer--span">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
