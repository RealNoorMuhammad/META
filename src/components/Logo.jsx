import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const LogoText = styled.h1`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 4rem;
  font-weight: 800;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
        w
      </Link>
    </LogoText>
  );
};

export default Logo;
