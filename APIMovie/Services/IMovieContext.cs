using System.Collections.Generic;
using APIMovie.Services.DALModels;


namespace APIMovie.Services
{
    public interface IMovieContext : IAddMovie, IGetMovie, IGetMovies
    {
    }

    public interface IAddMovie
    {
        Movie AddMovie(Movie movie);
    }

    public interface IGetMovie
    {
        Movie GetMovie(int MovieId);
    }

    public interface IGetMovies
    {
        IEnumerable<Movie> GetMovies();
    }
}
