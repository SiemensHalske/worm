"use client";

import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { lightTheme, darkTheme } from "../app/styles/themes";
import { createContext, useState, useEffect } from "react";
import "../app/styles/globals.css"; // Import der globalen CSS-Datei

export const ThemeContext = createContext({ toggleTheme: () => {} });

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme === "dark" ? darkTheme : lightTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme =
        prevTheme.palette.mode === "light" ? darkTheme : lightTheme;
      localStorage.setItem("theme", newTheme.palette.mode);
      return newTheme;
    });
  };

  return (
    <>
      <Head>
        <title>Holz-Handel-Montageservice</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Ihr Partner für Tischlerarbeiten und Montageservice"
        />
      </Head>
      <ThemeContext.Provider value={{ toggleTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              backgroundImage: "url(/bg-image.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Navbar />
            <Box sx={{ flexGrow: 1 }}>
              <Component {...pageProps} />
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
