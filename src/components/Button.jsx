import styled from "styled-components";
import React from "react";

const Btn = styled.button`
  display: inline-block;
  background-color: #000;
  color: #fff;
  outline: none;
  border: none;

  font-size: 1rem;
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2 ease;
  position: relative;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #fff !important;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
`;

const Button = ({ text, link }) => {
  return (
    <Btn>
      <a
        href={link}
        aria-label={text}
        target="_blank"
        rel="noreferrer"
        style={{ color: "#fff", textDecoration: "none" }}
      >
        {text}
      </a>
    </Btn>
  );
};

export default Button;
