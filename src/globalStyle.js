import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f9fafb",
  text: "#000000",
  button: "#ffffff",
  border: "#e0e0e0",
};

export const darkTheme = {
  body: "#1a1a1a",
  text: "#ffffff",
  button: "#232323",
  border: "#404040",
};

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.4s ease;
  }
  header button {
    background: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.button};
    transition: all 0.4s ease;
  }
  header button:hover{
    border: 1px solid ${({ theme }) => theme.border};
    transition: all 0.4s ease;
  }
`;
