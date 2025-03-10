import { FC, useRef } from "react";
import MovieCard, { MovieCardProps } from "../movieCard/MovieCard";
import { Box, IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export interface MovieCarouselProps {
  movieList: MovieCardProps[];
}

const MovieCarousel: FC<MovieCarouselProps> = ({ movieList }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 500; // Adjust scroll distance as needed

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollLeft = direction === "left" ? -scrollAmount : scrollAmount;
      carouselRef.current.scrollBy({ left: scrollLeft, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton
        onClick={() => handleScroll("left")}
        sx={{
          position: "absolute",
          left: 0,
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "black",
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <Stack
        ref={carouselRef}
        sx={{
          p: 1,
          minWidth: "100%",
          overflowX: "scroll",
          "&::-webkit-scrollbar": { display: "none" },
        }}
        direction="row"
        gap={1}
      >
        {movieList.length > 0 &&
          movieList.map((movieItem) => (
            <MovieCard key={movieItem.id} {...movieItem} />
          ))}
      </Stack>
      <IconButton
        onClick={() => handleScroll("right")}
        sx={{
          position: "absolute",
          right: 0,
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "black",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default MovieCarousel;
