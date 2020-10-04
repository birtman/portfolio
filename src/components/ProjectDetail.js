import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const ProjectDetails = (props) => {
  return (
    <div>
      <h1 className="">{props.project.title}</h1>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
