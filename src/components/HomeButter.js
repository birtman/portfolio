import React from "react";
import butter from "../data/butter";
import "../stylesheets/HomeButter.scss";

export default function HomeButter() {
  return (
    <div className="homebutter--wrapper">
      <div className="homebutter--intro">
        <p>Butter</p>
        <span>free projects</span>
      </div>
      <div className="homebutter--items">
        {butter.map((item) => (
          <div key={item.title} className="homebutter--img_container">
            <img
              className="homebutter--img"
              src={item.image}
              alt="bread projects"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
