import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Box,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useThemeContext } from "./ThemeProviderWrapper";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { currentTheme, toggleTheme } = useThemeContext();
  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        mr: { sm: 5 },
      }}
    >
      <TextField
        // className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          minWidth: "30rem",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
