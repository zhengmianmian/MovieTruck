import { Box } from "@mui/material";
import { FC } from "react";
import MovieInfo from "../components/movieInfo/MovieInfo";
import ShowTimes from "../components/showTimes/ShowTimes";

const MovieDetails: FC = () => {
  return (
    <Box p={2}>
      <MovieInfo />
      <ShowTimes />
    </Box>
  );
};

export default MovieDetails;
