// portal/src/components/navbar/Navbar.tsx
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
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#303030", height: "72px" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/assets/guardian_one_logo_wordMark.png"
            alt="Logo"
            width={280.7}
            height={24}
            style={{ marginRight: "20px" }}
          />
        </Box>
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
