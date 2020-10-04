import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import ProjectList from "./ProjectList";
import ProjectDetails from "./ProjectDetail";

export default class Projects extends Component {
  render() {
    /* let projectdata = this.props.projectdata;
    let match = this.props.match; */
    // console.log(this.props)
    // console.log(this.props.match)
    return (
      <div>
        <Nav />
        <ProjectList />
        {/*  <Route
          path={`${match.path}/:projectsId`}
          render={(routerProps) => (
            <ProjectList {...routerProps} projectdata={projectdata} />
          )}
        /> */}
        <Footer />
      </div>
    );
  }
}
