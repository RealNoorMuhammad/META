import React, { useEffect } from "react";
import { Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    const localDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (localDarkMode !== null) {
      setDarkMode(localDarkMode);
    }
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  const icon = darkMode ? <Brightness7Icon /> : <Brightness4Icon />;

  return (
    <div>
      <Button onClick={toggleDarkMode} variant="contained" className="new">
        {icon}
      </Button>
    </div>
  );
};

export default DarkModeToggle;
