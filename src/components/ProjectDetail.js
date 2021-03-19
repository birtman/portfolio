import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "../stylesheets/ProjectDetail.scss";
import projects from "../data/data";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import themes from "../data/themes";

export function ProjectDetail(props) {

/*   const [destinationIndex, setDestinationIndex] = useState(0);
  const [theme, setTheme] = useState(themes.bread);
  const destination = props.project[destinationIndex]
  
  useEffect(() => {
    setTheme(themes[destination.theme]);
  }, [destination]); */

/*   const specimages = (obj, fn) => {
    const values = Object.specImages(obj)

    values.forEach(val => 
        val && typeof val === "object" ? specimages(val, fn) : fn(val))
}

const print = (val) => console.log(val) */

/* const specimages = projects.map((item, i) => {
  return (
     <div>
        <h4>{item.specImages.map((images) => {
               return (     <img
                className="projectdetail--img"
                src={images.image}
                alt="project"
              />)
         })}</h4>
     </div>);
}); */

const data = props.project

/* const display = (data, fn) => {
  const values = Object.values(data)

  values.forEach(val => 
      val && typeof val === "object" ? display(val, fn) : fn(val))
}

const print = (val) => console.log(val)
display(data, print) */


/* 
const items = {}

for (const [index, value] of data.entries()) {
  items.push(<li key={index}>{value}</li>)
}


for (const property in object) {
  console.log(`${property}: ${object[property]}`);
} */

  return (
    <div className="projectdetail--wrapper" style={{ background: `${props.project.bg}`,color: `${props.project.fg}` }}>
      <Nav />

      <div className="projectdetail--header_top">
          <img
            className="projectdetail--header_img"
            src={props.project.image}
            alt="project"
          />
      </div>
      <div className="projectdetail--content"style={{ background: `${props.project.bg}`,color: `${props.project.fg}` }}>
      <div className="projectdetail_title">
          <h1 style={{ color: `${props.project.fg}` }}>{props.project.title}</h1>
        </div>
  <div className="specs--wrapper container">
   <div className="specs--left row">
    <div className="specs--left_col col">

      <div className="specs--col col" style={{ borderTop: `0.5px solid ${props.project.fg}` }}>
        <h4>Date Completed</h4>
      <p>{props.project.date}</p>
      </div>
      <div className="specs--col col" style={{ borderTop: `0.5px solid ${props.project.fg}` }}>
        <h4>Client</h4>
      <p>{props.project.client}</p>
      </div>
      <div className="specs--col col" style={{ borderTop: `0.5px solid ${props.project.fg}` }}>
        <h4>Product</h4>
      <p>{props.project.product}</p>
      </div>
      </div> 
   
   
      <div className="specs--right_col col">
<div className="specs--col col" style={{ borderTop: `0.5px solid ${props.project.fg}` }}>
  <h4>Used Technologies</h4>
<p>{props.project.usedTechnologies}</p>
</div>
<div className="specs--col col" style={{ borderTop: `0.5px solid ${props.project.fg}` }}>
  <h4>Services</h4>
<p>{props.project.services}</p>
</div>
<div className="specs--col col" style={{ borderTop: `0.5px solid ${props.project.fg}` }}>
  <h4>Collaborators</h4>
<p>{props.project.services}</p>
</div>
<div className="specs--col col" style={{ borderTop: `0.5px solid ${props.project.fg}` }}>
<h4>Website</h4>
<a href={`${props.project.url}`}>{props.project.url}</a>
</div>
</div>
</div>




<div className="specs--right row">
<div className="col" >

<div className="specs--col col" style={{ borderTop: `0.5px solid ${props.project.fg}` }}>
<p>{props.project.specs}</p>
</div>
</div>
</div>
  </div>
    <div className="projects--items">
    <div className="projectdetail--header">
          <img
            className="projectdetail--img"
            src={props.project.specImage1}
            alt="project"
          />
      </div>   <div className="projectdetail--header">
          <img
            className="projectdetail--img"
            src={props.project.specImage2}
            alt="project"
          />
      </div>   <div className="projectdetail--header">
          <img
            className="projectdetail--img"
            src={props.project.specImage3}
            alt="project"
          />
      </div>   <div className="projectdetail--header">
          <img
            className="projectdetail--img"
            src={props.project.specImage4}
            alt="project"
          />
      </div>
      </div>
        </div>

        
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    project: state.selected.project,
    mode: state.mode.bread,
  };
};

export default connect(mapStateToProps)(ProjectDetail);
