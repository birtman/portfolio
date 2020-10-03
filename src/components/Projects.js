import projects from "../data/data";
import current from "../data/current";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../stylesheets/Projects.scss";
import React, { useState, useEffect } from "react";

export function Projects(props) {
  const [filter, setFilter] = useState("all");
  const [projectlist, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projects);
  }, []);

  useEffect(() => {
    setProjects([...projects.filter((p) => p.category.includes(filter))]);
  }, [filter]);

  return (
    <div className="projects--wrapper">
      <div className="project--filter">
        <a href="/#" active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </a>
        <a
          href="/#"
          active={filter === "poster"}
          onClick={() => setFilter("poster")}
        >
          Poster
        </a>
        <a
          href="/#"
          active={filter === "code"}
          onClick={() => setFilter("code")}
        >
          Code
        </a>
        <a
          href="/#"
          active={filter === "editorial"}
          onClick={() => setFilter("editorial")}
        >
          Editorial
        </a>
        <a
          href="/#"
          active={filter === "branding"}
          onClick={() => setFilter("branding")}
        >
          Branding
        </a>
        <a
          href="/#"
          active={filter === "collaboration"}
          onClick={() => setFilter("collaboration")}
        >
          Collaboration
        </a>
        <a
          href="/#"
          active={filter === "exhibition"}
          onClick={() => setFilter("exhibition")}
        >
          Exhibition
        </a>
        <a
          href="/#"
          active={filter === "digital"}
          onClick={() => setFilter("digital")}
        >
          Digital
        </a>
      </div>
      <div className="projects--flex">
        <div className="projects--items">
          {projectlist.map((item) => (
            <div key={item.title} className="projects--item">
              <div className="list--projects_right">
                <img
                  className="list--project_img"
                  src={item.image}
                  alt="project"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    project: state.selected.project,
  };
};

export default connect(mapStateToProps)(Projects);
