import FetchMovies from './FetchMovies';
import layout from '../../layouts/BaseLayout.module.scss'
import styles from './Movies.module.scss';

const TrendingMovies = () => {
  return (
    <section className={`${styles.movies} ${layout.wrapper}`}>
      <h2>Trending Movies</h2>

      <FetchMovies type="trending" />
    </section>
  )
}

export default TrendingMovies;