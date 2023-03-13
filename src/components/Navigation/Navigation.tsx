import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.nav__link} ${styles.nav__link_active}` : `${styles.nav__link}`;

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={setActive}>
        Main
      </NavLink>
      <NavLink to="/about" className={setActive}>
        About us
      </NavLink>
    </nav>
  );
};

export { Navigation };
