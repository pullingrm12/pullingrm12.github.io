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
    <StyledCon>
      <StyledHead>Education</StyledHead>
      <img src={campus} alt="Cal Poly Campus" width={500} />
      <StyledHead2>
        College : California Polytechnic State University, San Luis Obispo
      </StyledHead2>
      <StyledHead2>
        Major : Computer Science (pursuing minor in statistics){" "}
      </StyledHead2>
      <StyledHead2>Current GPA : 3.535</StyledHead2>
      <StyledHead2>Graduation : June 2024</StyledHead2>
      <StyledHead2>Critical Coursework : </StyledHead2>
      <div classname="courses">
        {courses?.map((course) => {
          return <StyledList>{course}</StyledList>;
        })}
      </div>
    </StyledCon>
  );
}

export default Education;
