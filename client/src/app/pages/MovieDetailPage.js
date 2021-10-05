import { useParams } from 'react-router-dom';

import BaseLayout from '../layouts/BaseLayout';
import { MovieDetail } from '../components/movies';

const MovieDetailPage = () => {
  const { id } = useParams();

  return (
    <BaseLayout>
      <MovieDetail id={id} />
    </BaseLayout>
  )
}

export default MovieDetailPage;
