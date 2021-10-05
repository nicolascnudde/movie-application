import FetchMovies from './FetchMovies';
import layout from '../../layouts/BaseLayout.module.scss'
import styles from './Movies.module.scss';

const UpcomingMovies = () => {
  return (
    <section className={`${styles.movies} ${layout.wrapper}`}>
      <h2>Upcoming Movies</h2>

      <FetchMovies type="upcoming" />
    </section>
  )
}

export default UpcomingMovies;
