import React from "react";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Typography,
  Grid,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavbarData } from "./types";

const Navbar: React.FC<{ data: NavbarData }> = ({ data }) => {
  // Split the links into two groups
  const leftLinks = data.links.slice(0, Math.ceil(data.links.length / 2));
  const rightLinks = data.links.slice(Math.ceil(data.links.length / 2));

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#303030", height: "72px" }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "48px" }}>
              {leftLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: "#e4e2e3", fontSize: "14px" }}
                  >
                    {link.name}
                  </Typography>
                </a>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6" sx={{ color: "#e4e2e3", fontSize: "24px" }}>
                GUARDIAN ONE
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "24px" }}>
              {rightLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: "#e4e2e3", fontSize: "14px" }}
                  >
                    {link.name}
                  </Typography>
                </a>
              ))}
              <IconButton sx={{ color: "#e4e2e3" }}>
                <SearchIcon />
              </IconButton>
              <IconButton sx={{ color: "#e4e2e3" }}>
                <Badge badgeContent={data.notificationsCount} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton sx={{ color: "#e4e2e3" }}>
                <AccountCircleIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
