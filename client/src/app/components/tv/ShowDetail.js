import { Link } from 'react-router-dom';

import * as Routes from '../../routes'
import layout from '../../layouts/BaseLayout.module.scss';
import Ratings from '../movies/Ratings';
import styles from './ShowDetail.module.scss';
import useFetch from '../../hooks/useFetch';

const ShowDetail = ({ id }) => {
  const SHOW_DETAIL_API = `https://api.themoviedb.org/3/tv/${id}?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5`
  const SHOW_CREDITS_API = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5`

  const BACKDROP_IMG_PATH = 'https://image.tmdb.org/t/p/original';
  const PROFILE_IMG_PATH = 'https://image.tmdb.org/t/p/w500';

  const [show, isLoading, error] = useFetch(SHOW_DETAIL_API);
  const [cast] = useFetch(SHOW_CREDITS_API);

  return (
    <div>
      {
        error ? <div>{error}</div> :
        isLoading || !show || !cast
        ? <div>
            <p>Loading...</p>
          </div>
        : <>
            <section className={styles.heroContainer}>
              <div className={styles.imageContainer}>
                <img src={show.backdrop_path ? BACKDROP_IMG_PATH + show.backdrop_path : "/images/backdrop_fallback.jpg"} alt={show.name} />
              </div>
              
              <div className={styles.textContainer}>
                <div>
                  <h1>{show.name}</h1>

                  <p className={styles.textOverview}>{show.overview.slice(0,150)}...</p>

                  <div className={styles.cardRating}>
                      <span>
                        <Ratings score={show.vote_average} />
                      </span>
                      
                      <span>{show.vote_average} ({show.vote_count} votes)</span>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.showDetails}>
              <div className={layout.wrapper}>
                <div className={styles.showDetailsContainer}>
                  <h2>{show.tagline ? `"${show.tagline}"` : 'Overview'}</h2>

                  <p className={styles.textOverview}>{show.overview}</p>

                  <ul className={styles.showDetailsList}>
                    <li className={styles.showDetailsListItem}>
                      <div className={styles.leftPane}>
                        <p>Number of seasons</p>
                      </div>
                      
                      <div className={styles.rightPane}>
                        <p>{show.number_of_seasons}</p>
                      </div>
                    </li>

                    <li className={styles.showDetailsListItem}>
                      <div className={styles.leftPane}>
                        <p>Number of episodes</p>
                      </div>
                      
                      <div className={styles.rightPane}>
                        <p>{show.number_of_episodes}</p>
                      </div>
                    </li>

                    <li className={styles.showDetailsListItem}>
                      <div className={styles.leftPane}>
                        <p>Release date</p>
                      </div>
                      
                      <div className={styles.rightPane}>
                        <p>{show.seasons[0].air_date}</p>
                      </div>
                    </li>

                    <li className={styles.showDetailsListItem}>
                      <div className={styles.leftPane}>
                        <p>Genre</p>
                      </div>
                      
                      <div className={styles.rightPane}>
                        <ul className={styles.genreList}>
                          {
                            show.genres.map(genre => {
                              return (
                                <li className={styles.genreListItem} key={genre.name}>{genre.name}</li>
                              )
                            })
                          }
                          </ul>
                        </div>
                      </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.cast}>
              <div className={layout.wrapper}>
                <h2>Cast</h2>
                
                <ul className={styles.castList}>
                
                {cast.cast.map(c => {
                  return (
                    <li key={c.id} className={styles.castListItem}>
                      <Link to={Routes.PERSON.replace(':id', c.id)}>
                        <img src={c.profile_path ? PROFILE_IMG_PATH + c.profile_path : "/images/poster_fallback.png"} alt={c.name}/>
                    
                        <p>{c.name}</p>
                      </Link>
                    </li>
                  )}
                )}
                </ul>
              </div>
            </section>
        </>
      }
    </div>
  )
}

export default ShowDetail;
