import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

export function ProjectDetails(props) {
  return (
    <div>
      <h1 className="">{props.project.title}</h1>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    project: state.selected.project,
  };
};

export default connect(mapStateToProps)(ProjectDetails);
