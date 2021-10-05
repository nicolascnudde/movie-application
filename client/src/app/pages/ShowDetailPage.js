import { useParams } from 'react-router-dom';

import BaseLayout from '../layouts/BaseLayout';
import { ShowDetail } from '../components/tv';

const ShowDetailPage = () => {
  const { id } = useParams();

  return (
    <BaseLayout>
      <ShowDetail id={id} />
    </BaseLayout>
  )
}

export default ShowDetailPage;
