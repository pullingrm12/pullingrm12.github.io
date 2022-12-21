import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

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

function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHead>Welcome!</StyledHead>
      </StyledHeader>
      <Outlet />
    </>
  );
}

export default Header;
