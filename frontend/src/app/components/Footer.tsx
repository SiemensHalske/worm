"use client";

import * as React from "react";
import { Box, Typography, Container, Link as MuiLink } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import styles from "./Footer.module.css"; // CSS-Modul für den Footer

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      className={styles.footer}
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
            mb: 2,
            gap: 2,
          }}
        >
          <Link href="/sitemap" passHref legacyBehavior>
            <MuiLink>Sitemap</MuiLink>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <MuiLink>Startseite</MuiLink>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <MuiLink>Über uns</MuiLink>
          </Link>
          <Link href="/services" passHref legacyBehavior>
            <MuiLink>Leistungen</MuiLink>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <MuiLink>Kontakt</MuiLink>
          </Link>
          <Link href="/privacy" passHref legacyBehavior>
            <MuiLink>Datenschutz</MuiLink>
          </Link>
          <Link href="/impressum" passHref legacyBehavior>
            <MuiLink>Impressum</MuiLink>
          </Link>
        </Box>
        <Typography variant="h6" align="center" gutterBottom>
          Holz-Handel-Montageservice
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Ihr Partner für Tischlerarbeiten und Montageservice.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 2 }}
        >
          {"© Hendrik Siemens, "} {new Date().getFullYear()} {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
