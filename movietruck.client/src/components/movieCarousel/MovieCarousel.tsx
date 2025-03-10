import { CircularProgress, Typography } from "@mui/material";
import { FC } from "react";
import { useTopMovies } from "../../api/useTopMovies";
import MovieCarouselUI from "./movieCarouselUI/MovieCarouselUI";
const MovieCarousel: FC = () => {
  const { data: movies, isLoading, error } = useTopMovies();

  if (isLoading) return <CircularProgress />;

  if (error)
    return <Typography color="error">Failed to load movies</Typography>;

  return movies && <MovieCarouselUI movieList={movies} />;
};

export default MovieCarousel;
