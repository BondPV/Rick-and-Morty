import { NavLink } from 'react-router-dom';
import css from 'classnames';
import { TITLE } from '../../constants/Constants';
import styles from './Navigation.module.scss';

interface IPropsNav {
  currentTitle: (str: string) => void;
}

const Navigation = ({ currentTitle }: IPropsNav) => {
  const setActive = ({ isActive }: { isActive: boolean }): string =>
    isActive ? `${css(styles.nav__link, styles.nav__link_active)}` : `${styles.nav__link}`;

  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={setActive}
        onClick={() => {
          currentTitle(TITLE.MAIN);
        }}
      >
        Main
      </NavLink>

      <NavLink
        to="/form"
        className={setActive}
        onClick={() => {
          currentTitle(TITLE.FORM);
        }}
      >
        Form
      </NavLink>

      <NavLink
        to="/about"
        className={setActive}
        onClick={() => {
          currentTitle(TITLE.ABOUT);
        }}
      >
        About
      </NavLink>
    </nav>
  );
};

export { Navigation };
