using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieTruck.Server.Services;

namespace MovieTruck.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly MovieService _movieService;
        public MovieController(MovieService movieService)
        {
            _movieService = movieService;
        }
        [HttpGet("top/{count}")]
        public async Task<IActionResult> GetTopMovies(int count)
        {
            var movies = await _movieService.GetTopMoviesAsync(count);
            return Ok(movies);
        }
    }
}
