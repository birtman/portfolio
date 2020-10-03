import React from "react";
import HomeBread from "./HomeBread";
import HomeButter from "./HomeButter";
import "../stylesheets/HomeProjects.scss";

export default function HomeProjects() {
  return (
    <div className="homeprojects--wrapper">
      <HomeBread />
      <HomeButter />
    </div>
  );
}
