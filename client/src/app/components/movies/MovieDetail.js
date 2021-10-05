import { Link } from 'react-router-dom';
import { SiImdb } from 'react-icons/si'

import * as Routes from '../../routes';
import layout from '../../layouts/BaseLayout.module.scss';
import Ratings from './Ratings';
import styles from './MovieDetail.module.scss';
import useFetch from '../../hooks/useFetch';

const MovieDetail = ({ id }) => {
  const MOVIE_DETAIL_API = `https://api.themoviedb.org/3/movie/${id}?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5`
  const MOVIE_CREDITS_API = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5`

  const BACKDROP_IMG_PATH = 'https://image.tmdb.org/t/p/original';
  const PROFILE_IMG_PATH = 'https://image.tmdb.org/t/p/w500';

  const [movie, isLoading, error] = useFetch(MOVIE_DETAIL_API);
  const [cast] = useFetch(MOVIE_CREDITS_API);

  return (
    <div>
      {
        error ? <div>{error}</div> :
        isLoading || !movie || !cast
        ? <div>
            <p>Loading...</p>
          </div>
        : <>
            <section className={styles.heroContainer}>
              <div className={styles.imageContainer}>
                <img src={movie.backdrop_path ? BACKDROP_IMG_PATH + movie.backdrop_path : "/images/backdrop_fallback.jpg"} alt={movie.title} />
              </div>
              
              <div className={styles.textContainer}>
                <div>
                  <h1>{movie.title}</h1>

                  <p className={styles.textOverview}>{movie.overview.slice(0,150)}...</p>

                  <div className={styles.cardRating}>
                      <span>
                        <Ratings score={movie.vote_average} />
                      </span>
                      
                      <span>{movie.vote_average} ({movie.vote_count} votes)</span>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.movieDetails}>
              <div className={layout.wrapper}>
                <div className={styles.movieDetailsContainer}>
                  <h2>{movie.tagline ? `"${movie.tagline}"` : 'Overview'}</h2>

                  <p className={styles.textOverview}>{movie.overview}</p>

                  <ul className={styles.movieDetailsList}>
                    <li className={styles.movieDetailsListItem}>
                      <div className={styles.leftPane}>
                        <p>Release</p>
                      </div>
                      
                      <div className={styles.rightPane}>
                        <p>{movie.release_date}</p>
                      </div>
                    </li>

                    <li className={styles.movieDetailsListItem}>
                      <div className={styles.leftPane}>
                        <p>Runtime</p>
                      </div>
                      
                      <div className={styles.rightPane}>
                        <p>{movie.runtime} minutes</p>
                      </div>
                    </li>

                    <li className={styles.movieDetailsListItem}>
                      <div className={styles.leftPane}>
                        <p>Genre</p>
                      </div>
                      
                      <div className={styles.rightPane}>
                        <ul className={styles.genreList}>
                          {
                            movie.genres.map(genre => {
                              return (
                                <li className={styles.genreListItem} key={genre.name}>{genre.name}</li>
                              )
                            })
                          }
                          </ul>
                        </div>
                      </li>
                  </ul>

                  <div className={styles.imdbLink}>
                    <a href={"https://www.imdb.com/title/" + movie.imdb_id} target="_blank" rel="noopener noreferrer"><SiImdb /></a>
                  </div>
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

export default MovieDetail;
