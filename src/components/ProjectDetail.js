import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "../stylesheets/ProjectDetail.scss";

export function ProjectDetail(props) {
  return (
    <div className="projectdetail--wrapper">
      <Nav />

      <div className="projectdetail--header">
        <div className="projectdetail_left">
          <img
            className="projectdetail--img"
            src={props.project.image}
            alt="project"
          />
        </div>
      </div>
      <div className="projectdetail_right">
        <h1 className="">{props.project.title}</h1>
      </div>

      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    project: state.selected.project,
  };
};

export default connect(mapStateToProps)(ProjectDetail);
