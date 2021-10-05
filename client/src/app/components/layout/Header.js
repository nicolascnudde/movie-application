import MainNav from './MainNav';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
