import React from "react";
import About from "./About";
import Education from "./Education";
import Languages from "./Languages";

function Home() {
  return (
    <div className="App-body">
      {/*<StyledBody>Rhys Pulling</StyledBody> */}
      <About />
      <Education />
      <Languages />
    </div>
  );
}

export default Home;
