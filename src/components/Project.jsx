import React, { useState, useEffect } from "react";

function Projects() {
  const [index, setIndex] = useState(0);
  const projects = [
    "Movie Review Website",
    "3D Image Rendering",
    "Reformatting Program Using OOP-convention",
    "Emulator and Simulator for MIPS Assembly",
    "Created own Simplified Make Function",
    "Created own Simplified Find Function",
    "Animal Guessing Game",
    "Created Programming Language (IKEU)",
    "Analyzed Multiple Movie Databases",
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((index) => (index + 1) % projects.length);
    }, 3000);
    return () => clearInterval(id);
  });
  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <div className="cardContent">
            <h3>
              Projects<br></br>
            </h3>
            <p>{projects[index]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
