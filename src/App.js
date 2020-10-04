import React, { Component } from "react";
import Home from "./components/Home";
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";
import projectdata from "../src/data/data";

export default class App extends Component {
  state = {
    projectdata: projectdata,
  };
  render() {
    console.log(this.state.projectdata);
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/projectdetail">
              <ProjectDetail />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
