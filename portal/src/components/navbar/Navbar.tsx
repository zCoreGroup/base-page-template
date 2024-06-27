import React from "react";
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
    <AppBar
      position="static"
      sx={{ backgroundColor: "#303030", height: "72px" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/assets/guardian_one_logo_wordMark.png"
            alt="Logo"
            style={{ width: "280.7px", height: "24px", marginRight: "20px" }}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: "#e74c3c",
            fontWeight: "bold",
            fontSize: "28px",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          GUARDIAN ONE
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body1"
            sx={{ color: "#e4e2e3", marginRight: "24px", fontSize: "14px" }}
          >
            Doctrine
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#e4e2e3", marginRight: "24px", fontSize: "14px" }}
          >
            News
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#e4e2e3", marginRight: "24px", fontSize: "14px" }}
          >
            CSO Corner
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#e4e2e3", marginRight: "24px", fontSize: "14px" }}
          >
            Multimedia
          </Typography>
          <IconButton sx={{ color: "#e4e2e3", marginRight: "8px" }}>
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ color: "#e4e2e3", marginRight: "8px" }}>
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
