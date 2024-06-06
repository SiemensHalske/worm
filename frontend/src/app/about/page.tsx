"use client";

import * as React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import Image from "next/image";
import {
  Carpenter,
  PrecisionManufacturing,
  ThumbUp,
  Code, // Füge das neue Icon hinzu
} from "@mui/icons-material";
import styles from "./about.module.css";

const About = () => {
  return (
    <Box className={styles.pageContainer}>
      <Box
        className={styles.heroContainer}
        sx={{
          backgroundImage: 'url("/hero-about-bg.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
          textAlign: "center",
          color: "#fff",
          width: "100%",
        }}
      >
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
          Über uns
        </Typography>
      </Box>
      <Container className={styles.pageContent}>
        <Typography variant="h5" component="h2" gutterBottom>
          Ihr Partner für Tischlerarbeiten und Montageservice.
        </Typography>
        <Box my={4} textAlign="center">
          <Image
            src="/reimund-siemens.webp"
            alt="Reimund Siemens"
            width={500}
            height={300}
            className={styles.profileImage}
          />
        </Box>
        <Box className={styles.sectionsContainer}>
          <Paper className={styles.section}>
            <Carpenter className={styles.icon} />
            <Typography
              variant="h4"
              component="h3"
              className={styles.sectionHeader}
            >
              Erfahrung und Leidenschaft
            </Typography>
            <Typography variant="body1" component="p">
              Ich bin Reimund Siemens und seit knapp 30 Jahren selbstständiger
              Tischlermeister. Mit viel Erfahrung und Leidenschaft führe ich
              meinen Betrieb Holz-Handel-Montageservice. Ob maßgefertigte Möbel,
              präzise Holzarbeiten oder professionelle Montagen – bei mir sind
              Sie in den besten Händen.
            </Typography>
          </Paper>
          <Paper className={styles.section}>
            <PrecisionManufacturing className={styles.icon} />
            <Typography
              variant="h4"
              component="h3"
              className={styles.sectionHeader}
            >
              Höchste Qualität
            </Typography>
            <Typography variant="body1" component="p">
              Mein Ziel ist es, stets höchste Qualität und Zufriedenheit für
              meine Kunden zu gewährleisten. Ich stehe Ihnen mit meiner
              Expertise zur Seite und realisiere Ihre individuellen Wünsche und
              Projekte.
            </Typography>
          </Paper>
          <Paper className={styles.section}>
            <ThumbUp className={styles.icon} />
            <Typography
              variant="h4"
              component="h3"
              className={styles.sectionHeader}
            >
              Zufriedene Kunden
            </Typography>
            <Typography variant="body1" component="p">
              Zufriedenheit meiner Kunden hat für mich höchste Priorität. Ich
              bin stolz darauf, dass viele meiner Kunden immer wieder zu mir
              kommen und meine Dienste weiterempfehlen.
            </Typography>
          </Paper>
          <Paper className={styles.section}>
            <Code className={styles.icon} />
            <Typography
              variant="h4"
              component="h3"
              className={styles.sectionHeader}
            >
              Innovative Lösungen
            </Typography>
            <Typography variant="body1" component="p">
              Mit modernen Technologien und kreativen Ansätzen entwickle ich
              maßgeschneiderte Lösungen, die Ihren Bedürfnissen gerecht werden.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
