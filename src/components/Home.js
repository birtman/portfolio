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
import CookieConsent from "react-cookie-consent";



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
      <CookieConsent
      debug={true}
  location="bottom"
  buttonText="I understand"
  cookieName="myAwesomeCookieName2"
  style={{ color: "#130972", background: "#19afd0" }}
  buttonStyle={{ background: "#130972", color: "#f78765", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}

</CookieConsent>
      <Footer />
    </ThemeProvider>
  );
}
