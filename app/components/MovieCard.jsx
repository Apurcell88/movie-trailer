import Image from "next/image";

const MovieCard = ({
  key,
  title,
  overview,
  image,
  release,
  rating
}) => {
  return (
    <section className="movie-card--movie-container">
      <div className="movie-card--poster-container">
        <Image src={`https://image.tmdb.org/t/p/original${image}`} alt='movie cover poster' className="movie-card--poster" width='75' height='75' />
      </div>
      <div className="movie-card--description-container">
        <h2 className="movie-card--description" id='movie-card--title'>{title}</h2>
        <p className="movie-card--description">{overview}</p>
        <p className="movie-card--description">{release}</p>
        <p className="movie-card--description">Rating: {rating}</p>
      </div>
    </section>
  );
}
 
export default MovieCard;