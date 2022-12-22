import styled from "styled-components";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const StyledCon = styled(Container)`
  background: #f6da73;
  margin: 30px;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
`;

const StyledHeader = styled.header`
  background: #154734;
  min-height: 225px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const StyledHead2 = styled.h2`
  font-size: calc(25px);
  color: #f2c75c;
  text-align: left;
`;

const StyledList = styled.h2`
  color: #f2c75c;
  text-align: left;
  width: 400px;
  padding-right: 10px;
  border-radius: 5px;
  background-color: #154734;
`;

const StyledLink = styled(Link)`
  a:active {
    text-decoration: none;
  }
  ,
  a:hover {
    text-color: #ffffff;
  }
  ,
  a:visited {
    text-decoration: none;
  }
  ,
  a:link {
    text-decoration: none;
  }
  color: #000000;
`;

const StyledPara = styled.p``;

export {
  StyledCon,
  StyledHeader,
  StyledHead,
  StyledHead2,
  StyledList,
  StyledLink,
  StyledPara,
};
