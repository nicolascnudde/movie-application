import { Link } from 'react-router-dom';

import * as Routes from '../../routes';
import button from '../button/Button.module.scss';
import Ratings from '../movies/Ratings';
import styles from './FeaturedShow.module.scss';
import useFetch from '../../hooks/useFetch';

const FeaturedShow = () => {
  const TRENDING_SHOWS_API = `https://api.themoviedb.org/3/trending/tv/week?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5`;
  const BACKDROP_IMG_PATH = 'https://image.tmdb.org/t/p/original';
  
  const [shows, isLoading, error] = useFetch(TRENDING_SHOWS_API);
  const randomShow = shows && shows.results[Math.floor(Math.random() * shows.results.length)];

  return (
    <>
      {
        error ? <div>{error}</div> :
        isLoading || !shows
        ? <>
            <p>Loading...</p>
          </>
        : <>
            {
              <section className={styles.featured}>
                <div className={styles.heroContainer}>
                  <div className={styles.imageContainer}>
                    <img src={BACKDROP_IMG_PATH + randomShow.backdrop_path} alt={randomShow.name}></img>
                  </div>

                <div className={styles.textContainer}>
                  <div>
                    <h1>{randomShow.name}</h1>

                    {!!randomShow.vote_average
                    ? <div className={styles.cardRating}>
                      <span>
                        <Ratings score={randomShow.vote_average} />
                      </span>
                      
                      <span>{randomShow.vote_average}</span>
                    </div>
                    : <></>
                    }

                    <p className={styles.textOverview}>{randomShow.overview}</p>

                    <Link to={Routes.SHOW.replace(':id', randomShow.id)}>
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

export default FeaturedShow;
