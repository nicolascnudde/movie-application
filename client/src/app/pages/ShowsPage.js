import BaseLayout from '../layouts/BaseLayout';
import { 
  FeaturedShow,
  OnTheAirShows,
  PopularShows,
  TopRatedShows,
} from '../components/tv'

const ShowsPage = () => {
  return (
    <BaseLayout>
      <FeaturedShow />

      <PopularShows />

      <TopRatedShows />

      <OnTheAirShows />
    </BaseLayout>
  );
}

export default ShowsPage;
