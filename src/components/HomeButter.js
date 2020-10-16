import React from "react";
import butter from "../data/butter";
import "../stylesheets/HomeButter.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

function HomeButter(props) {
  return (
    <div className="homebutter--wrapper">
      <div className="homebutter--intro">
        <h1>Butter</h1>
        <span>free projects</span>
      </div>
      <div className="homebutter--items">
      {butter.map((item) => (
            <div key={item.title} className="homebutter--img_container">
              <Link
                className="list--projects_right"
                to="/projectdetail"
                onClick={() => {
                  props.dispatch({
                    type: "SELECT_PROJECT",
                    project: item,
                  });
                }}
              >
                <img
                  className="homebutter--img"
                  src={item.image}
                  alt="project"
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    project: state.selected.project,
  };
};

export default connect(mapStateToProps)(HomeButter);