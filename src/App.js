import React, { Component } from "react";
import About from "./components/about";
import WorkExp from "./components/workExperience";
import Skills from "./components/skills";
import Education from "./components/education";
import Card from "./components/profile";
import "./style.css";

 function App() {
 
    return (
      <div className="container">
        <div className="part1">
          <Card />
        </div>
        <div className="part2">
          <About />
          <Education />
          <Skills />
          <WorkExp />
        </div>
      </div>
    );
  
}

export default App