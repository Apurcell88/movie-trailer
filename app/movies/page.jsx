
import { getAllMovies } from '../api/tmdb'
// import { useState } from 'react';

const Movies = async () => {

  const movies = await getAllMovies();
  console.log(movies.results)

  return (
    <main>
      <h1>All Movies</h1>
      <ul>
        {movies.results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
          // we want a movie Card component
        ))}
      </ul>
    </main>
  );
}
 
export default Movies;