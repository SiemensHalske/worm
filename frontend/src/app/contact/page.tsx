import * as React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import Image from "next/image";
import styles from "./contact.module.css"; // Importiere das CSS-Modul

export const metadata = {
  title: "Kontakt - Holz-Handel-Montageservice",
  description: "Kontaktieren Sie uns per Telefon, E-Mail oder Kontaktformular.",
};

const Contact = () => {
  return (
    <div>
      <Box className={styles.heroContainer}>
        <Image
          src="/hero-about-bg.webp"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.heroImage}
        />
        <Box className={styles.heroText}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className={styles.heroTitle}
          >
            Kontakt
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            className={styles.heroSubtitle}
          >
            Wir freuen uns auf Ihre Nachricht.
          </Typography>
        </Box>
      </Box>
      <Container className={styles.pageContainer}>
        <Grid container spacing={4} className={styles.contactGrid}>
          <Grid item xs={12} md={4}>
            <Card className={styles.contactCard}>
              <CardContent>
                <Phone className={styles.icon} />
                <Typography variant="h6" component="h3">
                  Telefon
                </Typography>
                <Typography variant="body1" component="p">
                  +49 172 5272 889
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={styles.contactCard}>
              <CardContent>
                <Email className={styles.icon} />
                <Typography variant="h6" component="h3">
                  E-Mail
                </Typography>
                <Typography variant="body1" component="p">
                  info@tischlerservice.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={styles.contactCard}>
              <CardContent>
                <LocationOn className={styles.icon} />
                <Typography variant="h6" component="h3">
                  Adresse
                </Typography>
                <Typography variant="body1" component="p">
                  Bluddenstraße 5, 59329 Wadersloh, Deutschland
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box className={styles.contactForm}>
          <Typography variant="h6" component="h3" gutterBottom>
            Kontaktformular
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="E-Mail"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Nachricht"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: "20px",
                backgroundColor: "#1e88e5",
                color: "#ffffff",
                fontSize: "1rem",
                padding: "12px 24px",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Senden
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
