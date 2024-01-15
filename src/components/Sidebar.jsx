import React from "react";

import { categories } from "../utils/constants";
import { Stack, Grid, Button, Hidden } from "@mui/material";

import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { logo } from "../utils/constants";
import { useThemeContext } from "./ThemeProviderWrapper";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const {
    currentTheme,
    toggleTheme,
    open,
    handleDrawerOpen,
    handleDrawerClose,
  } = useThemeContext();

  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  // interface AppBarProps extends MuiAppBarProps {
  //   open?: boolean;
  // }
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
      }}
    >
      <Hidden mdDown>
        <List style={{}}>
          {categories.map((category, index) => (
            <ListItem key={category.name} disablePadding>
              <ListItemButton
                onClick={() => setSelectedCategory(category.name)}
                sx={{
                  display: "flex",
                  justifyContent: open ? "initial" : "flex-start",

                  flexDirection: open ? "row" : "column",

                  alignItems: open ? "center" : "flex-start",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 4 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {category.icon}
                </ListItemIcon>
                <ListItemText
                  primary={category.name}
                  sx={{
                    opacity: open ? 1 : 1,
                    ml: open ? 0 : 0,
                  }}
                />
              </ListItemButton>
              <Divider />
            </ListItem>
          ))}
        </List>
      </Hidden>

      <Hidden mdUp>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <Stack direction="row" spacing={2} sx={{ width: "fit-content" }}>
            {categories.map((category) => (
              <Button
                key={category.name}
                style={{
                  margin: "2px",
                }}
                onClick={() => setSelectedCategory(category.name)}
              >
                <span>{category.icon}</span>
                <Typography>{category.name}</Typography>
              </Button>
            ))}
          </Stack>
        </div>
      </Hidden>
    </Stack>
  );
};

export default Categories;
