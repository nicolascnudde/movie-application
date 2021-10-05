import styles from './Movies.module.scss';
import useFetch from '../../hooks/useFetch';
import { MediaCard } from '../card';

const FetchMovies = ({ type }) => {
  const GENERAL_MOVIES_API = `https://api.themoviedb.org/3/movie/${type}?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5`;
  const TRENDING_MOVIES_API = `https://api.themoviedb.org/3/${type}/movie/week?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5`;
  const [movies, isLoading, error] = useFetch((type !== 'trending') ? GENERAL_MOVIES_API : TRENDING_MOVIES_API);

  return (
    <>
      {
        error ? <div>{error}</div> :
        isLoading || !movies
        ? <div>
            <p>Loading...</p>
          </div>
        : <ul className={styles.moviesList}>
            {
              movies.results.map(m => <MediaCard key={m.id} id={m.id} title={m.title} poster={m.poster_path} overview={m.overview} score={m.vote_average} media="movie" />)
            }
          </ul>
      }
    </>
  )
};

export default FetchMovies;
