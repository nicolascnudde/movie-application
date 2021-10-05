import { useState } from 'react'
import { BsHouse, BsFilm, BsTv, BsSearch, BsPersonDash, BsPersonPlus, BsBrightnessHigh } from 'react-icons/bs';
import { Link, useHistory } from "react-router-dom";

import * as Routes from '../../routes';
import form from '../form/Form.module.scss';
import styles from './MainNav.module.scss';
import { useAuth } from '../../contexts/firebase/auth.context';

const MainNav = () => {
  const [query, setQuery] = useState('');
  const [isActive, setIsActive] = useState(true);
  const {currentUser, signOut} = useAuth();

  let history = useHistory();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setQuery('');

    history.push('/search/' + query)
  }

  const handleToggle = (ev) => {
    setIsActive(!isActive)
  }
  
  const handleChange = (ev) => setQuery(ev.target.value);

  return (
    <>
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavList}>
          <li className={styles.mainNavListItem}>
            <Link to={Routes.LANDING}><BsHouse /></Link>
          </li>

          <li className={styles.mainNavListItem}>
            <Link to={Routes.MOVIES}><BsFilm /></Link>
          </li>

          <li className={styles.mainNavListItem}>
            <Link to={Routes.SHOWS}><BsTv /></Link>
          </li>

          <li className={styles.mainNavListItem}>
            <button onClick={handleToggle} ><BsSearch /></button>
          </li>

          <li className={styles.mainNavListItem}>
            <button><BsBrightnessHigh /></button>
          </li>

          <li className={styles.mainNavListItem}>
            {!!currentUser
              ? <button onClick={signOut}><BsPersonDash /></button>
              : <Link to={Routes.AUTH_SIGN_IN}><BsPersonPlus /></Link>
            }
          </li>
        </ul>

      </nav>

      <div className={form.formContainer}>
        <form className={isActive ? form.formHidden : form.form} onSubmit={handleSubmit}>
          <input type="search" name="search" value={query} onChange={handleChange} placeholder="Search for a movie, tv show or person..." required />
        </form>
      </div>
    </>
  );
};

export default MainNav;
