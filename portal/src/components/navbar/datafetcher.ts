import React from "react";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Typography,
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
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 24px", // Add some padding to the left and right
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <Typography variant="body1" sx={{ color: "#e4e2e3", fontSize: "14px" }}>
            Doctrine
          </Typography>
          <Typography variant="body1" sx={{ color: "#e4e2e3", fontSize: "14px" }}>
            News
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/assets/guardian_one_logo_wordMark.png"
            alt="Logo"
            width={280.7}
            height={24}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <Typography variant="body1" sx={{ color: "#e4e2e3", fontSize: "14px" }}>
            CSO Corner
          </Typography>
          <Typography variant="body1" sx={{ color: "#e4e2e3", fontSize: "14px" }}>
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
