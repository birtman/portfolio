import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import HomeProjects from "./HomeProjects";
import { Link } from "react-router-dom";
import "../stylesheets/Home.scss";

export default function Home() {
  return (
    <div className="home--wrapper">
      <Nav />
      <Header />
      <HomeProjects />
      <div className="home--showall">
        <Link to="/projects" className="home--showall_link">
          Show all Projects
        </Link>
      </div>
      <Footer />
    </div>
  );
}
