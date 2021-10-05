import FetchShows from './FetchShows';
import styles from './Shows.module.scss';
import layout from '../../layouts/BaseLayout.module.scss'

const TopRatedShows = () => {
  return (
    <section className={`${styles.shows} ${layout.wrapper}`}>
        <h2>Top Rated TV Shows</h2>

        <FetchShows type="top_rated" />
    </section>
  )
}

export default TopRatedShows;
