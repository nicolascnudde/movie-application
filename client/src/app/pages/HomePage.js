import BaseLayout from '../layouts/BaseLayout';
import {
  FeaturedMovie,
  MovieTrailers,
  PopularMovies,
  TrendingMovies,
} from '../components/movies';

import {
  PopularShows,
  TrendingShows,
} from '../components/tv';

const HomePage = () => {
  return (
    <BaseLayout>
      <FeaturedMovie />

      <TrendingMovies />

      <TrendingShows />

      <PopularMovies />
      
      <PopularShows />
      
      <MovieTrailers />
    </BaseLayout>
  );
}

export default HomePage;
