import React from "react";
import styled from "styled-components";
import me from "../images/me.JPG";
import Container from "@mui/material/Container";

const StyledCon = styled(Container)`
  background: #f6da73;
  margin: 30px;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
`;

const StyledHead = styled.h1`
  font-size: calc(75px);
  color: #f2c75c;
  text-align: center;
  margin-left: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const StyledPara = styled.p``;

function About() {
  return (
    <StyledCon maxwidth="md">
      <StyledHead>About Me</StyledHead>
      <img src={me} alt="Photo of Rhys Pulling" height={300} />
      <StyledPara>
        My name is Rhys Pulling. I am a third year Computer Science student
        attending California Polytechnic State University, San Luis Obispo.
        Better known as Cal Poly SLO. I'm originally from Colorado and love
        being active and playing a variety of sports, the main ones being
        volleyball (doubles mainly) and basketball. I'm currently looking for an
        internship for Summer 2023 and would love to talk to am interested in
        Software Engineering, Data Science, and Artificial Intelligence. I'm
        willing to talk to anyone interested!
      </StyledPara>
    </StyledCon>
  );
}

export default About;
