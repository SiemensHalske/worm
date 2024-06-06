import * as React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/modules/home.module.css";

export const metadata = {
  title: "Holz-Handel-Montageservice",
  description: "Ihr Partner für Tischlerarbeiten und Montageservice.",
};

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

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Box
        className={styles.heroContainer}
        sx={{
          backgroundImage: 'url("/hero-about-bg.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "1rem",
              borderRadius: "10px",
              maxWidth: "80%", // Passe die Breite an
              margin: "0 auto", // Zentriere das Element
            }}
          >
            Holz-Handel-Montageservice
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "1rem",
              borderRadius: "10px",
              maxWidth: "80%", // Passe die Breite an
              margin: "0 auto", // Zentriere das Element
            }}
          >
            Ihr Partner für Tischlerarbeiten und Montageservice.
          </Typography>

          <Box my={4}>
            <Link href="/contact" passHref legacyBehavior>
              <Button
                variant="contained"
                sx={{
                  mt: 1,
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#1e3a8a",
                  },
                }}
              >
                Kontakt aufnehmen
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
      <Container
        sx={{
          textAlign: "center",
          mt: 4,
          padding: "2rem",
        }}
        className={styles.pageContent}
      >
        <Grid container spacing={4} className={styles.featuresContainer}>
          {portfolioItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  margin: "auto",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="140"
                  image={item.image}
                  sx={{ objectFit: "contain", padding: "1rem" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
