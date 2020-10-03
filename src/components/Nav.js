import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Nav.scss";
import "../stylesheets/Global.scss";

export default function Nav() {
  return (
    <nav className="nav--wrapper">
      <div className="nav--items">
        <Link to="/projects" className="nav--links">
          Projects
        </Link>
      </div>
      <div className="nav--items">
        <Link to="/" className="">
          Ahoi
        </Link>
      </div>
      <div className="nav--items">
        <Link to="/about" className="nav--links">
          About
        </Link>
      </div>
    </nav>
  );
}
