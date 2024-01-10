import { Link } from "react-router-dom";
import { Box, Stack, Typography, Button } from "@mui/material";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { useThemeContext } from "./ThemeProviderWrapper";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

import Divider from "@mui/material/Divider";
const Navbar = () => {
  const {
    currentTheme,
    toggleTheme,
    open,
    handleDrawerOpen,
    handleDrawerClose,
  } = useThemeContext();
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar,
  }));

  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",

        top: 0,

        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
        },
      }}
    >
      <DrawerHeader
        sx={{
          marginRight: 2,
        }}
      >
        <IconButton
          color="inherit"
          onClick={open ? handleDrawerClose : handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 4,
          }}
        >
          {" "}
          <MenuIcon />
        </IconButton>
        <div
          onClick={handleNavigation}
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="logo" height={45} />
          <Typography variant="h5">VideoTube</Typography>
        </div>
      </DrawerHeader>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <SearchBar />

          <Stack direction={"row"} spacing={2} alignItems="center">
            <Typography>Change Theme</Typography>
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              aria-label="toggle theme"
            >
              {currentTheme?.palette.mode === "dark" ? (
                <Brightness4 />
              ) : (
                <Brightness7 />
              )}
            </IconButton>
          </Stack>
        </div>
      </div>
    </Stack>
  );
};
export default Navbar;
