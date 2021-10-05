import FetchShows from './FetchShows';
import styles from '../movies/Movies.module.scss';
import layout from '../../layouts/BaseLayout.module.scss'

const TrendingMovies = () => {
  return (
    <section className={`${styles.movies} ${layout.wrapper}`}>
      <h2>Trending TV Shows</h2>

      <FetchShows type="trending" />
    </section>
  )
}

export default TrendingMovies;