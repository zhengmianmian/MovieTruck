import { FC } from "react";
import { useParams } from "react-router-dom";
import { useMovieById } from "../../api/useTopMovies";
import MovieInfoUI from "./movieInfoUI/MovieInfoUI";

const MovieInfo: FC = () => {
  const { id } = useParams();

  const { data: movieDetails, isLoading, error } = useMovieById(id!);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return movieDetails && <MovieInfoUI {...movieDetails} />;
};

export default MovieInfo;
