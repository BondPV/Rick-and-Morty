import { NavLink } from 'react-router-dom';
import css from 'classnames';
import styles from './Navigation.module.scss';
import { ROUTE_LINKS } from '../../constants/Constants';

const Navigation = () => {
  const setActive = ({ isActive }: { isActive: boolean }): string =>
    isActive ? `${css(styles.nav__link, styles.nav__link_active)}` : `${styles.nav__link}`;

  const [MAIN, FORM, ABOUT] = ROUTE_LINKS;

  return (
    <nav className={styles.nav}>
      <NavLink to={MAIN.PATH} className={setActive}>
        {MAIN.LINK}
      </NavLink>

      <NavLink to={FORM.PATH} className={setActive}>
        {FORM.LINK}
      </NavLink>

      <NavLink to={ABOUT.PATH} className={setActive}>
        {ABOUT.LINK}
      </NavLink>
    </nav>
  );
};

export { Navigation };
