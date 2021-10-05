import BaseLayout from '../layouts/BaseLayout';
import {
  FetchSearch,
  SearchBar,
} from '../components/search';
import { useParams } from 'react-router-dom';

const SearchPage = () => {
  const { query } = useParams();

  return (
    <BaseLayout>
      <SearchBar/>

      <FetchSearch query={query} />
    </BaseLayout>
  );
}

export default SearchPage;
