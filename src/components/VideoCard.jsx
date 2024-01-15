import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const navigate = useNavigate();
  const handleNavigation = (event) => {
    event.preventDefault();
    const destination = videoId ? `/video/${videoId}` : demoVideoUrl;
    navigate(destination);
  };
  const handleNavigation1 = () => {
    const destination = videoId ? `/video/${videoId}` : demoVideoUrl;
    navigate(destination);
  };

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "350px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      {/* <div onClick={handleNavigation}> */}
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      {/* </div> */}
      <CardContent
        sx={{
          // backgroundColor: "#1E1E1E",

          height: "106px",
        }}
      >
        <div onClick={handleNavigation1}>
          {/* <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}> */}
          <Typography variant="subtitle1" fontWeight="bold">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
          {/* </Link> */}
        </div>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
export default VideoCard;
