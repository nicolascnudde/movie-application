import BaseLayout from '../layouts/BaseLayout';
import { 
  FeaturedMovie,
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies
} from '../components/movies'

const MoviesPage = () => {
  return (
    <BaseLayout>
      <FeaturedMovie />
      
      <PopularMovies />
      
      <TopRatedMovies />
      
      <UpcomingMovies />
    </BaseLayout>
  );
}

export default MoviesPage;
