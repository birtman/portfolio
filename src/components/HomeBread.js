import React from "react";
import bread from "../data/bread";
import "../stylesheets/HomeBread.scss";
import { Link } from "react-router-dom";

export default function HomeBread() {
  return (
    <div className="homebread--wrapper">
      <div className="homebread--intro">
        <p>Bread &</p>
        <span>commissioned projects</span>
      </div>
      <div className="homebread--items">
        {bread.map((item) => (
          <div key={item.title} className="homebread--img_container">
            <Link to="/projects" className="nav--links">
              <img
                className="homebread--img"
                src={item.image}
                alt="bread projects"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
