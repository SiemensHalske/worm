"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Link from "next/link";
import Image from "next/image"; // Image-Komponente von Next.js
import ThemeToggle from "./ThemeToggle";
import { routes } from "./routes";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const getPageLinks = () => {
    const currentRoute = pathname?.startsWith("/dashboard")
      ? "/dashboard"
      : "/";
    const links = routes[currentRoute];

    const iconMap: { [key: string]: JSX.Element } = {
      "/": <HomeIcon />,
      "/about": <InfoIcon />,
      "/services": <BuildIcon />,
      "/contact": <ContactMailIcon />,
    };

    return (
      <List>
        {links.map((link: any) => (
          <Link href={link.path} passHref legacyBehavior key={link.path}>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemIcon>{iconMap[link.path]}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    );
  };

  return (
    <AppBar position="static">
      <Toolbar className={styles.navbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
          className={styles.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{ sx: { width: 200 } }}
        >
          {getPageLinks()}
        </Drawer>
        <Box display="flex" alignItems="center" className={styles.logoSection}>
          <Image
            src="/logo-holz-handel.webp"
            alt="Logo"
            width={40}
            height={40}
          />
          <Typography variant="h6" component="div" sx={{ marginLeft: 1 }}>
            <Link href="/" passHref legacyBehavior>
              <a className={styles.navLink}>Holz-Handel-Montageservice</a>
            </Link>
          </Typography>
        </Box>
        <Box className={styles.spacer}></Box>
        <Box className={styles.themeToggle}>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
