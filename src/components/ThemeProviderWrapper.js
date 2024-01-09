import { createContext, useState, useContext } from "react";
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
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
