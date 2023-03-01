import React from "react";
import {
  StyledCon,
  StyledHead,
  StyledHead2,
  StyledList,
} from "./styledcomponents";
import campus from "../images/campus.jpg";

function Education() {
  const courses = [
    "Intro to Software Engineering",
    "Data Structures",
    "Design and Analysis of Algorithms",
    "Discrete Structures",
    "Systems Programming",
    "Fundamentals of Computer Organization",
    "Object-Oriented Programming",
    "Technical Writing for Engineers",
    "Multivariable Calculus",
    "Linear Algebra",
    "Public Speaking",
    "General Physics",
  ];

  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <div className="about-cardContent">
            <h1>Education</h1>
            <h2>
              College : California Polytechnic State University, San Luis Obispo
            </h2>
            <h2>Major : Computer Science (pursuing minor in statistics) </h2>
            <h3>Current GPA : 3.535</h3>
            {/*<h3>Critical Coursework : </h3>
            <div classname="courses">
              {courses?.map((course) => {
                return <li>{course}</li>;
              })} 
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
