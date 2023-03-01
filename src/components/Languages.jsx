import React, { useState, useEffect } from "react";

function Languages() {
  const [index, setIndex] = useState(0);
  const languages = [
    "Python (Pandas)",
    "Java",
    "Javascript (Node.js, Express.js)",
    "React",
    "HTML / CSS",
    "SQL",
    "C",
    "Racket / Typed Racket",
    "R",
    "UNIX",
    "MIPS / RISC-V",
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((index) => (index + 1) % languages.length);
    }, 3000);
    return () => clearInterval(id);
  });

  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <div className="cardContent">
            <h3>Languages :</h3>
            {languages[index]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;
