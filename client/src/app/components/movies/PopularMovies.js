import FetchMovies from './FetchMovies';
import layout from '../../layouts/BaseLayout.module.scss'
import styles from './Movies.module.scss';

const PopularMovies = () => {
  return (
    <section className={`${styles.movies} ${layout.wrapper}`}>
      <h2>Popular Movies</h2>

      <FetchMovies type="popular" />
    </section>
  )
}

export default PopularMovies;
