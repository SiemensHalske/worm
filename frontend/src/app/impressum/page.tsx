"use client";

import * as React from "react";
import { Container, Typography, Box } from "@mui/material";
import styles from "./impressum.module.css";

const Impressum = () => {
  return (
    <Container className={styles.pageContainer}>
      <Box className={styles.pageContent}>
        <Typography variant="h2" component="h1" className={styles.header} gutterBottom>
          Impressum
        </Typography>
        <Typography variant="body1" component="div" className={styles.paragraph}>
          Reimund Siemens<br />
          Geschäftsführer<br />
          Bluddenstraße 5<br />
          59329 Wadersloh
        </Typography>

        <Typography variant="h4" component="h2" className={styles.subHeader} gutterBottom>
          Kontakt
        </Typography>
        <Typography variant="body1" component="div" className={styles.paragraph}>
          Telefon: 01725272889<br />
          E-Mail: info@tischlerservice.com
        </Typography>

        <Typography variant="h4" component="h2" className={styles.subHeader} gutterBottom>
          Redaktionell verantwortlich
        </Typography>
        <Typography variant="body1" component="div" className={styles.paragraph}>
          Hendrik Siemens
        </Typography>

        <Typography variant="h4" component="h2" className={styles.subHeader} gutterBottom>
          Verbraucherstreitbeilegung/Universalschlichtungsstelle
        </Typography>
        <Typography variant="body1" component="div" className={styles.paragraph}>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </Typography>

        <Typography variant="h4" component="h2" className={styles.subHeader} gutterBottom>
          Zentrale Kontaktstelle nach dem Digital Services Act - DSA (Verordnung (EU) 2022/265)
        </Typography>
        <Typography variant="body1" component="div" className={styles.paragraph}>
          Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen Sie wie folgt:
        </Typography>
        <Typography variant="body1" component="div" className={styles.paragraph}>
          E-Mail: siemenshendrik1@gmail.com<br />
          Telefon: 015126597476
        </Typography>
        <Typography variant="body1" component="div" className={styles.paragraph}>
          Sonstige Kontaktwege:<br />
          github.com/SiemensHalske
        </Typography>
        <Typography variant="body1" component="div" className={styles.paragraph}>
          Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch, Sarkastisch.
        </Typography>
      </Box>
    </Container>
  );
};

export default Impressum;
