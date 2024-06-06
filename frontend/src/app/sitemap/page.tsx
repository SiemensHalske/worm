import * as React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import styles from "./sitemap.module.css"; // Importiere das CSS-Modul

export const metadata = {
  title: "Sitemap - Holz-Handel-Montageservice",
  description: "Übersicht über alle Seiten von Holz-Handel-Montageservice.",
};

const Sitemap = () => {
  return (
    <Container className={styles.pageContainer}>
      <Box sx={{ textAlign: "center", mt: 4 }} className={styles.pageContent}>
        <Typography variant="h2" component="h1" gutterBottom>
          Sitemap
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Übersicht über alle Seiten von Holz-Handel-Montageservice.
        </Typography>
        <Box my={4} sx={{ textAlign: "left" }}>
          <List>
            <ListItem>
              <Link href="/" passHref legacyBehavior>
                <a className={styles.link}>
                  <ListItemText primary="Startseite" />
                </a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/about" passHref legacyBehavior>
                <a className={styles.link}>
                  <ListItemText primary="Über uns" />
                </a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/portfolio" passHref legacyBehavior>
                <a className={styles.link}>
                  <ListItemText primary="Portfolio" />
                </a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/contact" passHref legacyBehavior>
                <a className={styles.link}>
                  <ListItemText primary="Kontakt" />
                </a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/imprint" passHref legacyBehavior>
                <a className={styles.link}>
                  <ListItemText primary="Impressum" />
                </a>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default Sitemap;
