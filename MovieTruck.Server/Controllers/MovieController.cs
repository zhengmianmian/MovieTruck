﻿using Microsoft.AspNetCore.Http;
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMovieById(int id)
        {
            var movie = await _movieService.GetMovieByIdAsync(id);
            if (movie == null)
            {
                return NotFound($"Movie with ID {id} not found.");
            }
            return Ok(movie);
        }

        [HttpGet("showDates")]
        public async Task<IActionResult> GetShowTimes([FromQuery] int movieId, [FromQuery] string location)
        {
            var showTimeDates = await _movieService.GetShowTimeDatesAsync(movieId, location);

            if (!showTimeDates.Any())
            {
                return NotFound($"No showtimes found for movie ID {movieId} at location '{location}'.");
            }

            return Ok(showTimeDates);
        }

    }
}
