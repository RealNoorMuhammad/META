import React, { useState } from "react";

import "./App.css";
import { Helmet } from "react-helmet";
import "./style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "rsuite/styles/index.less";

import IBIZAMAIN from "./pages/IBIZAMAIN";

import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>META MILLIONS</title>
        <meta name="META MILLIONS" content="META MILLIONS" />
      </Helmet>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <Router>
          <Routes>
            <Route path="/" exact={true} element={<IBIZAMAIN />} />
          
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
