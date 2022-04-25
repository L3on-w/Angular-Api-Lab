using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APIMovie.Services;
using APIMovie.Services.DALModels;
using APIMovie.Models.Moviez;

namespace APIMovie.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        private readonly IMovieContext _movieContext;
        public MovieController (IMovieContext movieContext)
        {
            _movieContext = movieContext;
        }

        [HttpGet]
        public IActionResult GetAllMovies()
        {
            var movies = _movieContext.GetMovies();

            return Ok(_movieContext.GetMovies);
        }

        [HttpGet]
        [Route("movieId")]
        public IActionResult GetMovie([FromRoute] int movieId)
        {
            var movie = _movieContext.GetMovie(movieId);
            
            if (movie != null)
            {
                return Ok(movie);
            }

            return NotFound($"We do not have a movie in our list that matches the id: (movieId) provided");
        }

            [HttpPost]
        public IActionResult AddMovie([FromBody] PostMovieRequest postMovieRequest)
        {
          var movie = new Movie();
            movie.Title = postMovieRequest.Title;
            movie.Actor = postMovieRequest.Actor;

            var dbMovie = _movieContext.AddMovie(movie);

           return Created();
        }
    }
}
