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

    }
}
