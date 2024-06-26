// portal/src/components/navbar/Navbar.tsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#303030" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/path-to-logo.png"
            alt="Logo"
            style={{ width: "80px", marginRight: "20px" }}
          />
          <Typography
            variant="h6"
            sx={{ color: "#e74c3c", fontWeight: "bold", fontSize: "28px" }}
          >
            GUARDIAN ONE
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body1"
            sx={{ color: "#e4e2e3", marginRight: "20px", fontSize: "14px" }}
          >
            Doctrine
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#e4e2e3", marginRight: "20px", fontSize: "14px" }}
          >
            News
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#e4e2e3", marginRight: "20px", fontSize: "14px" }}
          >
            CSO Corner
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#e4e2e3", marginRight: "20px", fontSize: "14px" }}
          >
            Multimedia
          </Typography>
          <IconButton sx={{ color: "#e4e2e3" }}>
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ color: "#e4e2e3" }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "#e4e2e3" }}>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
