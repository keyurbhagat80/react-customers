import React from "react";
import { StyledNav, StyledUl } from "./navbar.style";
import { Link } from "react-router-dom";

const Navbar: React.FC<{}> = () => {
  return (
    <StyledNav>
      <StyledUl>
        <li>
          <Link to={"/"}> Home </Link>
        </li>
        <li>
          <Link to={"/create"}> Create Customer </Link>
        </li>
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;
