import React from "react";
import bread from "../data/bread";
import "../stylesheets/HomeBread.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

function HomeBread(props) {
  return (
    <div className="homebread--wrapper">
      <div className="homebread--intro">
        <h1>Bread&</h1>
        <span>commissioned</span>
      </div>
      <div className="homebread--items">
      {bread.map((item) => (
            <div key={item.title} className="homebread--img_container">
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
               <div className="homebtread--img_wrapper">
                <div className="homebread--hover">{item.title}</div>
                <img
                  className="homebread--img"
                  src={item.image}
                  alt="project"
                />
                </div>
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

export default connect(mapStateToProps)(HomeBread);