import React from "react";
import { StyledHeader, StyledHead } from "./styledcomponents";
import { Outlet } from "react-router-dom";
import { StyledLink } from "./styledcomponents";

function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHead>Welcome!</StyledHead>
        <nav classname="nav">
          <h2>
            <button>
              <StyledLink to="">Home</StyledLink>
            </button>
            <button>
              <StyledLink to="about">About Me</StyledLink>
            </button>
            <button>
              <StyledLink to="education">Education</StyledLink>
            </button>
            <button>
              <StyledLink to="languages">Languages</StyledLink>
            </button>
          </h2>
        </nav>
      </StyledHeader>
      <Outlet />
    </>
  );
}

export default Header;
