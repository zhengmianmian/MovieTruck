using MovieTruck.Server.Models;
using MovieTruck.Server.Data;
using Microsoft.EntityFrameworkCore;

namespace MovieTruck.Server.Services
{
    public class MovieService
    {
        private readonly ApplicationDbContext _applicationDbContext;
        public MovieService(ApplicationDbContext applicationDbContext) 
        {
            _applicationDbContext = applicationDbContext;
        }

        public async Task<List<Movie>> GetTopMoviesAsync(int count)
        {
            return await _applicationDbContext.Movies
                .Take(count)
                .ToListAsync();
        }

        public async Task<Movie?> GetMovieByIdAsync(int id)
        {
            return await _applicationDbContext.Movies.FindAsync(id);
        }

        public async Task<List<DateOnly>> GetShowTimeDatesAsync(int movieId, string location)
        {
            return await _applicationDbContext.Times
                .Where(t => t.MovieId == movieId && t.Room.CinemaLocation == location)
                .Select(t => DateOnly.FromDateTime(t.ShowTime)) // Extract only date
                .Distinct()
                .OrderBy(date => date)
                .ToListAsync();
        }


    }
}
