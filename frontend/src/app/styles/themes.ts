import { createTheme } from "@mui/material/styles";

// Farbschema
const primaryMain = "#004d00"; // Tiefes Grün
const secondaryMain = "#8B4513"; // Warmes Braun
const accentMain = "#F5F5DC"; // Hellbeige
const backgroundDefaultLight = "#FAF3E0"; // Helles Beige
const backgroundDefaultDark = "#0d1b2a"; // Dunkles Blau
const textPrimaryLight = "#3C3C3C"; // Dunkles Braun
const textPrimaryDark = "#e0e1dd"; // Helles Grau

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
    background: {
      default: backgroundDefaultLight,
      paper: accentMain,
    },
    text: {
      primary: textPrimaryLight,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
    background: {
      default: backgroundDefaultDark,
      paper: "#1b263b", // Dunkleres Blau für Papier im Dunkelmodus
    },
    text: {
      primary: textPrimaryDark,
    },
  },
});
