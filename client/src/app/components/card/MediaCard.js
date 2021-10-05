import { Link } from 'react-router-dom';

import * as Routes from '../../routes';
import styles from './Card.module.scss';
import Ratings from '../movies/Ratings'

const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

const MediaCard = ({ id, title, poster, score, media, search }) => {
  return (
    <li className={!search ? styles.card : styles.cardAlt}>
      <Link className={styles.cardLink} to={media === 'movie' ? Routes.MOVIE.replace(':id', id) : Routes.SHOW.replace(':id', id)}>
        <img loading="lazy" src={poster ? POSTER_PATH + poster : "/images/poster_fallback.png"} alt={title} />
      
        <h3>{title}</h3>
      
        {
          !!score
          ? <div className={styles.cardRating}>
          <span>
            <Ratings score={score} />
          </span>
          
          <span>{score}</span>
          </div>
          : <span>No ratings yet</span>
        }
      </Link>
    </li>
  )
};

export default MediaCard;
