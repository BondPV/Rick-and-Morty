import { useLocation } from 'react-router-dom';
import { GLOBAL_STYLES, ROUTE_LINKS } from '../../constants/Constants';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';

const Header = () => {
  const pathname = useLocation().pathname;

  const setTitle = (pathname: string) => {
    const [MAIN] = ROUTE_LINKS;
    const currentTitle = ROUTE_LINKS.find((route) => route.PATH === pathname)?.TITLE;

    return currentTitle || MAIN.TITLE;
  };

  return (
    <header className={styles.header}>
      <div className={GLOBAL_STYLES.CONTAINER}>
        <div className={styles.header__wrapper}>
          <h1 className={styles.header__title}>{setTitle(pathname)}</h1>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export { Header };
