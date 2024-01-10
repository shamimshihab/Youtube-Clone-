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
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  // const AppBar = styled(MuiAppBar, {
  //   shouldForwardProp: (prop) => prop !== "open",
  // })(({ theme, open }) => ({
  //   zIndex: theme.zIndex.drawer + 1,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   ...(open && {
  //     marginLeft: drawerWidth,
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     transition: theme.transitions.create(["width", "margin"], {
  //       easing: theme.transitions.easing.sharp,
  //       duration: theme.transitions.duration.enteringScreen,
  //     }),
  //   }),
  // }));
  // const Drawer = styled(MuiDrawer, {
  //   shouldForwardProp: (prop) => prop !== "open",
  // })(({ theme, open }) => ({
  //   width: drawerWidth,
  //   flexShrink: 0,
  //   whiteSpace: "nowrap",
  //   boxSizing: "border-box",
  //   ...(open && {
  //     ...openedMixin(theme),
  //     "& .MuiDrawer-paper": openedMixin(theme),
  //   }),
  //   ...(!open && {
  //     ...closedMixin(theme),
  //     "& .MuiDrawer-paper": closedMixin(theme),
  //   }),
  // }));
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={
        {
          // xs: 5,
          // sm: 7,
          // md: 10,
          // lg: 15,
        }
      }
      p={2}
      sx={{
        position: "sticky",
        // background: "#000",
        top: 0,
        // justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
        },
      }}
    >
      {/* <div
        onClick={handleNavigation}
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          // border: "1px solid red",
        }}
      >
        <img src={logo} alt="logo" height={45} />
        <Typography variant="h3">VideoTube</Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // border: "1px solid red",
          flexDirection: "row",
        }}
      >
        <SearchBar />
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </div> */}

      <DrawerHeader
        sx={{
          marginRight: 5,
          // ...(open && { display: "none" }),
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
            // border: "1px solid red",
          }}
        >
          <img src={logo} alt="logo" height={45} />
          <Typography variant="h5">VideoTube</Typography>
        </div>
        {/* <IconButton
          onClick={handleDrawerClose}
          sx={{
            marginRight: 2,
            ...(open ? {} : { display: "none" }),
          }}
        >
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton> */}
      </DrawerHeader>

      {/* <div
        onClick={handleNavigation}
        style={{
          display: "flex",
          alignItems: "space-evenly",
          // border: "1px solid red",
          ...(!open && { display: "none" }),
        }}
      >
        <img src={logo} alt="logo" height={45} />
        <Typography variant="h3">VideoTube</Typography>
      </div> */}
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
            // justifyContent: "space-between",
            border: "1px solid red",
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
