import { Link } from 'react-router-dom';

import * as Routes from '../../routes';
import styles from './Card.module.scss';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

const PersonCard = ({ id, poster, name }) => {
  return (
    <li className={styles.card}>
      <Link className={styles.cardLink} to={Routes.PERSON.replace(':id', id)}>
        <img src={POSTER_PATH + poster} alt={name} />
      
        <h3>{name}</h3>
      </Link>
    </li>
  )
}

export default PersonCard;
