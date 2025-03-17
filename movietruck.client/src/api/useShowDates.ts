import { useQuery } from "@tanstack/react-query";

const fetchShowDates = async (
  movieId: string,
  location: string
): Promise<string[]> => {
  const response = await fetch(
    `/api/movie/showDates?movieId=${movieId}&location=${encodeURIComponent(
      location
    )}`
  );
  if (response.status === 404) {
    throw new Error("Sorry, the movie isn't showing at any date.");
  }

  if (!response.ok) {
    throw new Error("Failed to fetch show dates");
  }

  return response.json();
};

export const useShowDates = (movieId: string, location: string) => {
  return useQuery<string[]>({
    queryKey: ["showDates", movieId, location], // Dependency key for caching
    queryFn: () => fetchShowDates(movieId, location),
    enabled: !!movieId && !!location, // Only fetch when both parameters are provided
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};
