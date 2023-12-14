import { getAllMovies } from '../api/tmdb';
import MovieCard from '../components/MovieCard';

const Movies = async () => {

  const movies = await getAllMovies();
  console.log(movies.results);

  return (
    <main>
      <h1 className='movies--title'>Popular Movies</h1>
      <article className='movies--popular-movies-container'>
        {movies.results.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            image={movie.poster_path}
            release={movie.release_date}
            rating={movie.vote_average}
          />
        ))}
      </article>
    </main>
  );
};
 
export default Movies;