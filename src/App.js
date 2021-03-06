import React, { Component } from "react";
import Home from "./components/Home";
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetail";
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
            {projectdata.map((item) => (
              <div key={item.title}>
                <Route path={`/projects/:${item.title}`}>
                  <ProjectDetails />
                </Route>
              </div>
            ))}

            {/*     <Route
              path="/projects"
              render={(routerProps) => (
                <Projects
                  {...routerProps}
                  projectdata={this.state.projectdata}
                />
              )}
            /> */}
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
