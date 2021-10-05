import useFetch from '../../hooks/useFetch';
import Video from './Video.js'

const MovieTrailer = ({ id }) => {
  const MOVIE_VIDEOS = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5`
  const [videos, isLoading, error] = useFetch(MOVIE_VIDEOS);
  const trailer = videos && videos.results.find(v => v.type === 'Trailer');

  return (
    <>
      {
        error ? <div>{error}</div> :
        isLoading || !videos
        ? <>
            <p>Loading...</p>
          </>
        : <>

            {
              <Video id={trailer.key} title={trailer.title} />
            }
          </>
      }
    </>
  )
}

export default MovieTrailer;
