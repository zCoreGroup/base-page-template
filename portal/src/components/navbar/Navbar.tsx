import React, { useState, useEffect } from "react";
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
import dynamic from "next/dynamic";

const useMediaQuery = dynamic(
  () => import("@mui/material/useMediaQuery").then((mod) => mod.default),
  { ssr: false }
);

const Navbar: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 960px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = (event: MediaQueryListEvent) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#303030",
        height: "48px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          padding: "0 24px",
          maxWidth: "1920px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flex: isSmallScreen ? 0 : 1,
            minWidth: isSmallScreen ? "auto" : "25%",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#e4e2e3", fontSize: "12px", whiteSpace: "nowrap" }}
          >
            Doctrine
          </Typography>
          {!isSmallScreen && (
            <Typography
              variant="body2"
              sx={{ color: "#e4e2e3", fontSize: "12px", whiteSpace: "nowrap" }}
            >
              News
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: 2,
            margin: "0 24px",
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
            gap: "24px",
            flex: isSmallScreen ? 0 : 1,
            minWidth: isSmallScreen ? "auto" : "25%",
            justifyContent: "flex-end",
          }}
        >
          {!isSmallScreen && (
            <>
              <Typography
                variant="body2"
                sx={{
                  color: "#e4e2e3",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                }}
              >
                CSO Corner
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#e4e2e3",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                }}
              >
                Multimedia
              </Typography>
            </>
          )}
          <IconButton size="small" sx={{ color: "#e4e2e3", padding: 0 }}>
            <SearchIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "#e4e2e3", padding: 0 }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon fontSize="small" />
            </Badge>
          </IconButton>
          <IconButton size="small" sx={{ color: "#e4e2e3", padding: 0 }}>
            <AccountCircleIcon fontSize="small" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
