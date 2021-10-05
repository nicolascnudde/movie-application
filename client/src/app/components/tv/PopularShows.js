import FetchShows from './FetchShows';
import styles from './Shows.module.scss';
import layout from '../../layouts/BaseLayout.module.scss'

const PopularShows = () => {
  return (
    <section className={`${styles.shows} ${layout.wrapper}`}>
        <h2>Popular TV Shows</h2>

        <FetchShows type="popular" />
    </section>
  )
}

export default PopularShows;
