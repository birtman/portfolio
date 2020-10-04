import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ProjectList from "./ProjectList";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ProjectList />
        <Footer />
      </div>
    );
  }
}
