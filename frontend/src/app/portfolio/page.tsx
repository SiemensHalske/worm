import * as React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import styles from "./portfolio.module.css";

const portfolioItems = [
  {
    title: "Maßgefertigte Möbel",
    description: "Individuelle Möbel nach Maß für Ihr Zuhause oder Büro.",
    image: "/massgefertigte-moebel.svg",
  },
  {
    title: "Präzise Holzarbeiten",
    description: "Hochwertige Holzarbeiten für verschiedene Anwendungen.",
    image: "/praezise-holzarbeiten.svg",
  },
  {
    title: "Professionelle Montagen",
    description:
      "Fachgerechte Montagen von Möbeln und anderen Holzkonstruktionen.",
    image: "/professionelle-montagen.svg",
  },
  {
    title: "Restaurierungen",
    description: "Liebevolle Restaurierung alter Möbelstücke.",
    image: "/restaurierungen.svg",
  },
  {
    title: "Innenausbau",
    description: "Kompletter Innenausbau für Wohnungen und Häuser.",
    image: "/innenausbau.svg",
  },
  {
    title: "Gartenmöbel",
    description: "Hochwertige Gartenmöbel aus Holz für Ihren Außenbereich.",
    image: "/gartenmoebel.svg",
  },
];

export const metadata = {
  title: "Portfolio - Holz-Handel-Montageservice",
  description: "Entdecken Sie unsere vielfältigen Projekte und Arbeiten.",
};

const Portfolio = () => {
  return (
    <Container className={styles.pageContainer}>
      <Box className={styles.heroContainer}>
        <Typography variant="h2" component="h1" className={styles.heroTitle}>
          Portfolio
        </Typography>
        <Typography variant="h5" component="h2" className={styles.heroSubtitle}>
          Entdecken Sie unsere vielfältigen Projekte und Arbeiten.
        </Typography>
      </Box>
      <Box className={styles.pageContent}>
        <Grid container spacing={4} className={styles.gridContainer}>
          {portfolioItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={styles.card}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  className={styles.cardMedia}
                />
                <CardContent className={styles.cardContent}>
                  <Typography variant="h6" component="h3">
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Portfolio;
