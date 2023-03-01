import React from "react";
import Glass from "./GlassMorph.jsx";
import About from "./About.jsx";
import Education from "./Education.jsx";
import Languages from "./Languages.jsx";
import Projects from "./Project.jsx";

function Home() {
  return (
    <div>
      <Glass />
      <About />
      <Education />
      <Languages />
      <Projects />
    </div>
  );
}

export default Home;
