import React from 'react';
import { NavLink } from 'react-router-dom';
import { TITLE } from '../../constants/Constants';
import styles from './Navigation.module.scss';

interface IPropsNav {
  currentTitle: (str: string) => void;
}

interface IStateNav {
  title?: string;
}

class Navigation extends React.Component<IPropsNav, IStateNav> {
  setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.nav__link} ${styles.nav__link_active}` : `${styles.nav__link}`;

  render() {
    return (
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={this.setActive}
          onClick={() => {
            this.props.currentTitle(TITLE.MAIN);
          }}
        >
          Main
        </NavLink>
        <NavLink
          to="/about"
          className={this.setActive}
          onClick={() => {
            this.props.currentTitle(TITLE.ABOUT);
          }}
        >
          About
        </NavLink>
      </nav>
    );
  }
}

export { Navigation };
