import React, { useState } from "react";
import { connect } from "react-redux";
import isProjectLatest from "../helpers/isProjectLatest";
import { leftArrow } from "../actions/leftArrow";
import { rightArrow } from "../actions/rightArrow";
import { Link } from "react-router-dom";
import "../stylesheets/Latest.scss";
import "../stylesheets/Global.scss";

function Latest(props) {
  const [leftClick, setleftClick] = useState(false);
  const [rightClick, setrightClick] = useState(false);
  let latest = isProjectLatest();

  return (
    <div className="latest--wrapper">
      <div className="latest--frame">
        <div className="latest--prev_next_wrapper">
          <div
            className="latest--prev"
            onClick={() => {
              props.dispatch(leftArrow());
              setleftClick(true);
              setTimeout(() => {
                setleftClick(false);
                setrightClick(false);
              }, 1000);
            }}
          >
            &larr;
          </div>
          <div
            className="latest--next"
            onClick={() => {
              props.dispatch(rightArrow());
              setrightClick(true);
              setTimeout(() => {
                setleftClick(false);
                setrightClick(false);
              }, 1000);
            }}
          >
            &rarr;
          </div>
        </div>
        <div
          className={
            leftClick
              ? "latest--project leftclick"
              : rightClick
              ? "latest--project rightclick"
              : "latest--project"
          }
        >
          <div className="project--index">0{props.index + 1}</div>
          <div className="project--title_wrapper">
            <div className="project--title_text">
              {latest[props.index].title}
            </div>
          </div>
          <div className="project--img_wrapper">
            <img
              className="project--img"
              src={latest[props.index].image}
              alt="project"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    index: state.slider.index,
  };
};

export default connect(mapStateToProps)(Latest);
