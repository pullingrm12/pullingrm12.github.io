import React from "react";

function Education() {
  const courses = [
    "Intro to Software Engineering",
    "Intro to Data Science",
    "Data Structures",
    "Object-Oriented Programming",
    "Intro to Databases",
    "Design and Analysis of Algorithms",
    "Discrete Structures",
    "Programming Languages",
    "Systems Programming",
    "Computer Architecture",
  ];

  const general = [
    "Multivariable Calculus",
    "Linear Algebra",
    "Public Speaking",
    "General Physics",
    "Technical Writing for Engineers",
    "Applied Regression Analysis",
    "Ethics of Science and Technology",
  ];

  function School() {
    return (
      <div className="container">
        <div className="card">
          <div className="content">
            <div className="cardContent">
              <h1>Education</h1>
              <p className="cardP">
                <strong>College:</strong> California Polytechnic State
                University, San Luis Obispo
              </p>
              <p className="cardP">
                <strong>Graduation Date:</strong> June 2024
              </p>
              <p className="cardP">
                <strong>Major:</strong> Computer Science
              </p>
              <p className="cardP">
                <strong>Minor:</strong> Statistics
              </p>
              <p className="cardP">
                <strong>Current GPA:</strong> 3.5
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Major() {
    return (
      <div className="container">
        <div className="card">
          <div className="content">
            <div className="cardContent">
              <h3>
                Critical Coursework : <br></br>Major
              </h3>
              <div className="courses">
                {courses?.map((course) => {
                  return <p className="cardP">{course}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function General() {
    return (
      <div className="container">
        <div className="card">
          <div className="content">
            <div className="cardContent">
              <h3>
                Critical Coursework : <br></br>Supplementary
              </h3>
              <div className="courses">
                {general?.map((gen) => {
                  return <p className="cardP">{gen}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="education">
      <School />
      <Major />
      <General />
    </div>
  );
}

export default Education;
