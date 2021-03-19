import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../stylesheets/Home.scss";
import "../stylesheets/About.scss";

export default function About() {
  return (
    <div>
      <Nav />
      <div className="about--wrapper">
        <div className="about--text">
          <p className="about--text_p">Birte Spreuer was born in the mid-80s in the almost rural town of Neunkirchen. Her communication design studies took her to Saarbrücken at a young age, where she created colourful and bold designs in her studio, as well as dancing a lot. Now she lives in Amsterdam and continues to devote herself to designing beautiful print products, the good life and front end programming.</p></div>
      </div>
      <Footer />
    </div>
  );
}
