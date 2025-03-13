import { Box } from "@mui/material";
import { FC } from "react";
import MovieInfo from "../components/movieInfo/MovieInfo";

const MovieDetails: FC = () => {
  return (
    <Box p={2}>
      <MovieInfo />
    </Box>
  );
};

export default MovieDetails;
