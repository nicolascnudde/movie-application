import { Link } from 'react-router-dom';

import * as Routes from '../../routes';
import layout from '../../layouts/BaseLayout.module.scss'
import MovieTrailer from './MovieTrailer';
import Ratings from './Ratings'
import styles from './MovieTrailers.module.scss';
import useFetch from '../../hooks/useFetch';

const MOVIES_NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5';

const MoviesNowPlaying = () => {
  const [movies, isLoading, error] = useFetch(MOVIES_NOW_PLAYING);

  return (
    <section className={`${styles.trailers} ${layout.wrapper}`}>
      <h2>Latest Trailers</h2>
      {
        error ? <div>{error}</div> :
        isLoading || !movies
        ? <div>
            <p>Loading...</p>
          </div>
        : <ul className={styles.trailersList}>
            {
              movies.results.slice(0, 4).map(m => {
                return (
                  <li key={m.id} className={styles.trailersListItem}>
                    <MovieTrailer id={m.id} />
                    
                    <Link to={Routes.MOVIE.replace(':id', m.id)}>
                      <h3>{m.title}</h3>
        
                      <div className={styles.rating}>
                        <span>
                          <Ratings score={m.vote_average} />
                        </span>
                        
                        <span>{m.vote_average}</span>
                      </div>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
      }
    </section>
  )
};

export default MoviesNowPlaying;
