import { useQuery } from "@tanstack/react-query";
import { MovieCardUIProps } from "../components/movieCarousel/movieCard/MovieCardUI";

export type Movie = Omit<
  MovieCardUIProps,
  "onPlayClick" | "onInfoClick" | "onTimesTicketClick"
>;

const fetchTopMovies = async (): Promise<Movie[]> => {
  const response = await fetch("/api/movie/top/20");
  if (!response.ok) {
    throw new Error("Failed to fetch top movies");
  }
  return response.json();
};

export const useTopMovies = () => {
  return useQuery<Movie[]>({
    queryKey: ["topMovies"],
    queryFn: fetchTopMovies,
  });
};
