import FetchMovies from './FetchMovies';
import layout from '../../layouts/BaseLayout.module.scss'
import styles from './Movies.module.scss';

const TopRatedMovies = () => {
  return (
    <section className={`${styles.movies} ${layout.wrapper}`}>
      <h2>Top Rated Movies</h2>

      <FetchMovies type="top_rated" />
    </section>
  )
}

export default TopRatedMovies;
