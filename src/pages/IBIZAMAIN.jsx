import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Undercard from "../components/IbizaButton/BackgroundChanger";

import "./Cursor.css";
const IBIZAMAIN = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <div>
      {!smallScreen && (
        <div > 
          <Undercard />
     
        </div>
      )}
      {/* This is used For the mobile view Blue print Map*/}
      {smallScreen && (
        <div>
          <Undercard />
        
        </div>
      )}
    </div>
  );
};

export default IBIZAMAIN;
