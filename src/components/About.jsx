import React from "react";
import "../css/App.css";

function About() {
  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <div className="about-cardContent">
            <h1>About Me</h1>
            <p>
              <strong>College:</strong> California Polytechnic State University,
              San Luis Obispo
            </p>
            <p>
              <strong>Graduation Date:</strong> June 2024
            </p>
            <p>
              <strong>Major:</strong> Computer Science
            </p>
            <p>
              <strong>Minor:</strong> Statistics
            </p>
            <p>
              <strong>Current GPA:</strong> 3.5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
