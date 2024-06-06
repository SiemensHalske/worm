"use client";

import * as React from "react";
import { createContext, useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../styles/themes";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const ThemeContext = createContext({ toggleTheme: () => {} });

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme === "dark" ? darkTheme : lightTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.palette.mode === "light" ? darkTheme : lightTheme
    );
    localStorage.setItem(
      "theme",
      theme.palette.mode === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="container">
          <Navbar />
          <div className="content">
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
