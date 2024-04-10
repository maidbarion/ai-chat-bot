import React from "react";
import { Outlet, Link } from "react-router-dom";
import { StyledUl, StyledLi } from "./Root.styled";

const Root: React.FC = () => {
  return (
    <>
      <nav>
        <StyledUl>
          <StyledLi>
            <Link to={"/"}>Home</Link>
          </StyledLi>
          <StyledLi>
            <Link to={`/about`}>About</Link>
          </StyledLi>
          <StyledLi>
            <Link to={`/content`}>Content</Link>
          </StyledLi>
        </StyledUl>
      </nav>
      <Outlet />
    </>
  );
};

export default Root;
