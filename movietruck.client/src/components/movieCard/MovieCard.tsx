import type { FC } from "react";
import {
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export interface MovieCardProps {
  id: number;
  title: string;
  description?: string;
  releaseDate?: string;
  runningTime?: number;
  director?: string;
  cast?: string;
  largeCoverUrl?: string;
  smallCoverUrl?: string;
  sideCoverUrl?: string;
  onPlayClick?: () => void;
  onInfoClick?: () => void;
  onTimesTicketClick?: () => void;
}

const MovieCard: FC<MovieCardProps> = ({
  title,
  sideCoverUrl,
  onPlayClick,
  onInfoClick,
  onTimesTicketClick,
}) => {
  return (
    <Card sx={{ width: 230, height: 425, flexShrink: 0 }}>
      <CardMedia
        component="img"
        height="255"
        image={sideCoverUrl}
        alt="movie poster"
      />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute" }}>
          <IconButton
            color="primary"
            sx={{
              marginRight: 2,
              width: 60,
              height: 60,
              border: "1px solid lightblue",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.7)" },
            }}
            onClick={() => onPlayClick?.()}
          >
            <PlayArrowIcon />
          </IconButton>
          <IconButton
            color="primary"
            sx={{
              width: 50,
              height: 50,
              border: "1px solid lightblue",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.7)" },
            }}
            onClick={() => onInfoClick?.()}
          >
            i
          </IconButton>
        </Box>
      </CardActions>
      <CardContent
        sx={{
          marginTop: 4,
          marginBottom: 2,
          p: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1">{title}</Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            width: "100%",
            height: 50,
            backgroundColor: "black",
            color: "white",
          }}
          onClick={() => onTimesTicketClick?.()}
        >
          Times & Tickets
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
