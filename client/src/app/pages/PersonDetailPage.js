import { useParams } from 'react-router-dom';

import BaseLayout from '../layouts/BaseLayout';
import { PersonDetail } from '../components/people';

const PersonDetailPage = () => {
  const { id } = useParams();

  return (
    <BaseLayout>
      <PersonDetail id={id} />
    </BaseLayout>
  )
}

export default PersonDetailPage;
