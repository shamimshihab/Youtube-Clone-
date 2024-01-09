import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        <Typography variant="h3">VideoTube</Typography>
      </Link>

      <SearchBar />
    </Stack>
  );
};
export default Navbar;
