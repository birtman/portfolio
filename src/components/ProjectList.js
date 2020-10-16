import projects from "../data/data";
import current from "../data/current";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "../stylesheets/Projects.scss";
import React, { useParams, useState, useEffect } from "react";
import ProjectDetail from "./ProjectDetail";
import "../stylesheets/ProjectList.scss";


export function ProjectList(props) {
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
        <a active={filter === "all"} onClick={() => setFilter("all")}>
          everything
        </a>
        <a active={filter === "analog"} onClick={() => setFilter("analog")}>
        analog
        </a>
        <a active={filter === "digital"} onClick={() => setFilter("digital")}>
          digital
        </a>
        <a active={filter === "code"} onClick={() => setFilter("code")}>
          code
        </a>
      </div>
      <div className="projects--flex">
        <div className="projects--items">
          {projectlist.map((item) => (
            <div key={item.title} className="projects--item">
              <Link
                className="list--projects_right"
                to="/projectdetail"
                onClick={() => {
                  props.dispatch({
                    type: "SELECT_PROJECT",
                    project: item,
                  });
                }}
              >
                <img
                  className="list--project_img"
                  src={item.image}
                  alt="project"
                />
              </Link>
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

export default connect(mapStateToProps)(ProjectList);
