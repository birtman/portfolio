import React, { useState } from "react";
import bread from "../data/bread";
import "../stylesheets/HomeBread.scss";
import { Link } from "react-router-dom";
import useDocumentScrollThrottled from "../helpers/useDocumentScrollThrottled";

export default function HomeBread() {
  const [shouldShowImage, setshouldShowImage] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setshouldShowImage(currentScrollTop > 2);

    setTimeout(() => {
      setshouldShowImage(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const showedStyle = shouldShowImage ? "showed" : "";
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
                className={`homebread--img  ${showedStyle}`}
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
