import { Link } from "react-router-dom";
import { Box, Stack, Typography, Button } from "@mui/material";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { useThemeContext } from "./ThemeProviderWrapper";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { currentTheme, toggleTheme } = useThemeContext();
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={{
        xs: 5,
        sm: 7,
        md: 10,
        lg: 15,
      }}
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
      </div>
    </Stack>
  );
};
export default Navbar;
