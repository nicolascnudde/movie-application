import {
  MediaCard,
  PersonCard,
} from '../card';
import styles from './FetchSearch.module.scss'
import layout from '../../layouts/BaseLayout.module.scss'
import useFetch from '../../hooks/useFetch';

const FetchSearch = ({ query }) => {
  const SEARCH_API = `https://api.themoviedb.org/3/search/multi?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5&query=${query}`
  const [media, isLoading, error] = useFetch(SEARCH_API);

  return (
    <>
      {
        error ? <div>{error}</div> :
        isLoading || !media
        ? <div>
            <p>Loading...</p>
          </div>
        : <div className={layout.wrapper}>
          <ul className={`${styles.moviesList}`}>
          {
            media.results.map(m => {
              return (
                m.media_type === 'movie' || m.media_type === 'tv' 
                ? <MediaCard key={m.id} id={m.id} title={m.title ? m.title : m.name} poster={m.poster_path} overview={m.overview} score={m.vote_average} media={m.media_type} search={true} />
                : m.media_type === 'person' && <PersonCard key={m.id} id={m.id} name={m.name} poster={m.profile_path} search={true} />
              )
            })
          }
        </ul>
        </div>
      }
    </>
  )
}

export default FetchSearch;
