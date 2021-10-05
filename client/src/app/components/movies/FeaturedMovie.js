import { Link } from 'react-router-dom';

import * as Routes from '../../routes';
import button from '../button/Button.module.scss';
import Ratings from './Ratings';
import styles from './FeaturedMovie.module.scss';
import useFetch from '../../hooks/useFetch';

const FeaturedMovie = () => {
  const TRENDING_MOVIES_API = `https://api.themoviedb.org/3/trending/movie/week?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5`;
  const BACKDROP_IMG_PATH = 'https://image.tmdb.org/t/p/original';
  
  const [movies, isLoading, error] = useFetch(TRENDING_MOVIES_API);
  const randomMovie = movies && movies.results[Math.floor(Math.random() * movies.results.length)];

  return (
    <>
      {
        error ? <div>{error}</div> :
        isLoading || !movies
        ? <>
            <p>Loading...</p>
          </>
        : <>
            {
              <section className={styles.featured}>
                <div className={styles.heroContainer}>
                  <div className={styles.imageContainer}>
                    <img src={BACKDROP_IMG_PATH + randomMovie.backdrop_path} alt={randomMovie.title}></img>
                  </div>

                <div className={styles.textContainer}>
                  <div>
                    <h1>{randomMovie.title}</h1>

                    {!!randomMovie.vote_average
                    ? <div className={styles.cardRating}>
                      <span>
                        <Ratings score={randomMovie.vote_average} />
                      </span>
                      
                      <span>{randomMovie.vote_average}</span>
                    </div>
                    : <></>
                    }

                    <p className={styles.textOverview}>{randomMovie.overview}</p>

                    <Link to={Routes.MOVIE.replace(':id', randomMovie.id)}>
                      <button className={button.btnPrimary}>
                        Read more
                      </button>
                    </Link>
                   </div>
                  </div>
                </div>
              </section>
            }
          </>
      }
    </>
  )
}


export default FeaturedMovie;
