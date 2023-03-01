import React from "react";

function Projects() {
  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <div className="cardContent">
            <h1>
              Projects<br></br>
            </h1>
            <p className="cardP">
              <strong>JavaScript / React : </strong>
              <li>Movie Review Website</li>
            </p>
            <p className="cardP">
              <strong>Python : </strong>
              <li>3D Image Rendering</li>
            </p>
            <p className="cardP">
              <strong>Java : </strong>
              <li>Reformatting Program Using OOP-convention</li>
              <li>Emulator and Simulator for MIPS Assembly</li>
            </p>
            <p className="cardP">
              <strong>C : </strong>
              <li>Created own Simplified Make Function</li>
              <li>Animal Guessing Game</li>
            </p>
            <p className="cardP">
              <strong>Racket : </strong>
              <li>Created Programming Language (IKEU)</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
