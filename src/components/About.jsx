import React from "react";
import "../css/App.css";

function About() {
  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <div className="cardContent">
            <h1>About Me</h1>
            <p className="cardP">
              <strong>Age:</strong> 20
            </p>
            <p className="cardP">
              <strong>Location:</strong> Highlands Ranch, CO
            </p>
            <p className="cardP">
              <strong>Hobbies:</strong> Beach Volleyball, Basketball, Movies and
              TV, LEGOS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
