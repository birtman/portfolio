import { Link } from "react-router-dom";
import "../stylesheets/Nav.scss";
import "../stylesheets/Global.scss";
import React, { useState } from "react";
import useDocumentScrollThrottled from "../helpers/useDocumentScrollThrottled";
import styled from "styled-components";



export default function Nav(props) {

  const red = "red"
  const blue = "blue"

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";
  return (
    <div className={`nav--wrapper ${shadowStyle} ${hiddenStyle}`}>
      <div className="nav--items">
        <Link to="/projects" className="nav--links">
          projects
        </Link>
      </div>
      <div className="nav--items">
        <Link to="/" className="">
          Ahoi
        </Link>
      </div>
      <div className="nav--items">
        <Link to="/about" className="nav--links">
          about
        </Link>
      </div>
    </div>
  );
}
