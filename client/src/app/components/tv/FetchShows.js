import { MediaCard } from '../card';
import styles from './Shows.module.scss';
import useFetch from '../../hooks/useFetch';

const FetchShows = ({ type }) => {
  const GENERAL_SHOWS_API = `https://api.themoviedb.org/3/tv/${type}?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5`;
  const TRENDING_SHOWS_API = `https://api.themoviedb.org/3/${type}/tv/week?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5`;
  const [shows, isLoading, error] = useFetch((type !== 'trending') ? GENERAL_SHOWS_API : TRENDING_SHOWS_API);

  return (
    <>
      {
        error ? <div>{error}</div> :
        isLoading || !shows
        ? <div>
            <p>Loading...</p>
          </div>
        : <ul className={styles.showsList}>
            {
              shows.results.map(m => <MediaCard key={m.id} id={m.id} title={m.name} poster={m.poster_path} overview={m.overview} score={m.vote_average} />)
            }
          </ul>
      }
    </>
  )
};

export default FetchShows;
