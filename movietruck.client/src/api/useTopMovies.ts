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

const fetchMovieById = async (id: string): Promise<Movie> => {
  const response = await fetch(`/api/movie/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch movie by id");
  }
  return response.json();
};

export const useMovieById = (id: string) => {
  return useQuery<Movie>({
    queryKey: ["movieById", id], // Include id in the queryKey to prevent cache conflicts
    queryFn: () => fetchMovieById(id), // Pass id to the function
    enabled: !!id, // Only run the query if id is truthy (prevents issues with undefined)
  });
};
