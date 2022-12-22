import React from "react";
import { StyledCon, StyledHead, StyledPara } from "./styledcomponents";
import me from "../images/me.JPG";

function About() {
  return (
    <StyledCon maxwidth="md">
      <StyledHead>About Me</StyledHead>
      <img src={me} alt="Rhys Pulling" height={300} />
      <StyledPara>
        My name is Rhys Pulling. I am a third year Computer Science student
        attending California Polytechnic State University, San Luis Obispo.
        Better known as Cal Poly SLO. I'm originally from Colorado and love
        being active and playing a variety of sports, the main ones being
        volleyball (doubles) and basketball. I'm currently looking for an
        internship for Summer 2023 and am interested in Software Engineering,
        Data Science, and Artificial Intelligence. I love learning and can pick
        up things fast. I'm willing to talk to anyone interested!
      </StyledPara>
    </StyledCon>
  );
}

export default About;
