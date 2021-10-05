import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

import styles from './Ratings.module.scss';

const Ratings = ({ score }) => {
  return (
    <span className={styles.ratings}>
      {score >= 0 && score < 1 ? <><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></> : ''}
      {score >= 1 && score < 2 ? <><FaStarHalfAlt /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></> : ''}
      {score >= 2 && score < 3 ? <><FaStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></> : ''}
      {score >= 3 && score < 4 ? <><FaStar /><FaStarHalfAlt /><FaRegStar /><FaRegStar /><FaRegStar /></> : ''}
      {score >= 4 && score < 5 ? <><FaStar /><FaStar /><FaRegStar /><FaRegStar /><FaRegStar /></> : ''}
      {score >= 5 && score < 6 ? <><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar /><FaRegStar /></> : ''}
      {score >= 6 && score < 7 ? <><FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /></> : ''}
      {score >= 7 && score < 8 ? <><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar /></> : '' }
      {score >= 8 && score < 9 ? <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></> : '' }
      {score >= 9 && score < 10 ? <><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></> : '' }
      {score === 10 ? <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></> : '' }
    </span>
  )
}

export default Ratings
