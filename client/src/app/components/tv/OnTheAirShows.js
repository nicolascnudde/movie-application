import FetchShows from './FetchShows';
import styles from '../movies/Movies.module.scss';
import layout from '../../layouts/BaseLayout.module.scss'

const UpcomingShows = () => {
  return (
    <section className={`${styles.movies} ${layout.wrapper}`}>
      <h2>Currently Airing TV Shows</h2>

      <FetchShows type="on_the_air" />
    </section>
  )
}

export default UpcomingShows;
