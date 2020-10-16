import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import HomeProjects from "./HomeProjects";
import { Link } from "react-router-dom";
import "../stylesheets/Home.scss";
import styled from "styled-components";
import themes from "../data/themes";



export default function Home(props) {

const [destinationIndex, setDestinationIndex] = useState(0);
const [theme, setTheme] = useState(themes.bread);
const destination = props.destinations[destinationIndex]

useEffect(() => {
  setTheme(themes[destination.theme]);
}, [destination]);


  return (
    <ThemeProvider theme={theme} className="home--wrapper">
      <Nav  {...props}
          destinationIndex={destinationIndex}
          setDestinationIndex={setDestinationIndex}/>
      <Header />
      <HomeProjects />
      <div className="home--showall">
       
        <Link to="/projects" className="home--showall_link">
          Show all Projects
        </Link>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
