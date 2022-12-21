import React from "react";
import styled from "styled-components";
import About from "./About";

const StyledBody = styled.div`
  background-color: #c69214;
`;

function Home() {
  return (
    <div className="App-body">
      {/*<StyledBody>Rhys Pulling</StyledBody> */}
      <About />
    </div>
  );
}

export default Home;
