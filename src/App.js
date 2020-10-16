import React, { Component } from "react";
import Home from "./components/Home";
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";
import projectdata from "../src/data/data";
import test1 from "../src/images/Feature_Dimensions.png";


const DESTINATIONS = [
  {
    theme: "bread",
    title: "Test 1",
    subtitle: "A note calendar with declarations of love to everyday life",
    specs:
      "Birte Spreuer and Daniela Spinelli collect little moments of happiness, which we all usually restlessly rush past. Mischievous or cheeky, cheerful or thoughtful, they awaken memories and tickle desires with little provocations.",
    url: "https://typografie.de/produkt/wir-lieben-366-tagen/",
    date: "2021",
    client: "published at Verlag Hermann Schmidt",
    product: "note calendar",
    usedTechnologies: "",
    latest: true,
    image: test1,
    category: ["poster", "all"],
  },
  {
    theme: "butter",
    title: "Test 2",
    subtitle: "A note calendar with declarations of love to everyday life",
    specs:
      "Birte Spreuer and Daniela Spinelli collect little moments of happiness, which we all usually restlessly rush past. Mischievous or cheeky, cheerful or thoughtful, they awaken memories and tickle desires with little provocations.",
    url: "https://typografie.de/produkt/wir-lieben-366-tagen/",
    date: "2021",
    client: "published at Verlag Hermann Schmidt",
    product: "note calendar",
    usedTechnologies: "",
    latest: true,
    image: test1,
    category: ["poster", "all"],
  },
]


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
              <Home destinations={DESTINATIONS}/>
            </Route>

            <Route path="/projects">
              <Projects destinations={DESTINATIONS}/>
            </Route>
            <Route path="/projectdetail">
              <ProjectDetail destinations={DESTINATIONS}/>
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
