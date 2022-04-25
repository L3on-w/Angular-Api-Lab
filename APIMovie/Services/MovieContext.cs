using APIMovie.Services.DALModels;
using System.Linq;
using Microsoft.EntityFrameworkCore;




namespace APIMovie.Services
{
    public class MovieContext :  DbContext
    {
        public DbSet<Movie> Movies { get; set; }

        public Movie AddMovie (Movie movie)
        {
            var movieEntity = Movies.Add(movie).Entity;
            SaveChanges();
            return movieEntity;
        }

        public Movie GetMovie(int MovieId)
        {
            var dbmovie = Movies.Find(MovieId);

            return dbmovie;
        }

        public IEnumerable<Movie> GetMovies()
        {
            return Movies;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                @"Data Source = (localdb)\MSSQLLocalDB; Integrated Security = True; Connect Timeout = 30; Encrypt = False; TrustServerCertificate = False; ApplicationIntent = ReadWrite; MultiSubnetFailover = False");
        }
    }
}
