import React, { createContext, useState, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeContext = createContext();

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProviderWrapper({ children }) {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  //   const handleOpen = () => {
  //     setOpen(!open);
  //   };

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    // handleOpen();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    // handleClose();
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        toggleTheme,
        open,
        handleDrawerOpen,
        handleDrawerClose,
      }}
    >
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
