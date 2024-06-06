"use client";

import * as React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ClientThemeProvider";
import Button from "@mui/material/Button";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Button color="inherit" onClick={toggleTheme}>
      Toggle Theme
    </Button>
  );
};

export default ThemeToggle;
