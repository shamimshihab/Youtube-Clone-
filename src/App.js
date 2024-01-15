import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import { ThemeProviderWrapper } from "./components/ThemeProviderWrapper";
import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
  Sidebar,
} from "./components";

const App = () => (
  <BrowserRouter>
    <ThemeProviderWrapper>
      <Paper
        sx={
          {
            // backgroundColor: "#000"
          }
        }
      >
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Paper>
    </ThemeProviderWrapper>
  </BrowserRouter>
);

export default App;
