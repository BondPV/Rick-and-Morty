import { useState } from 'react';
import { GLOBAL_STYLES, TITLE } from '../../constants/Constants';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';

const Header = () => {
  const [title, setTitle] = useState(TITLE.MAIN);

  const updateTitle = (title: string) => {
    setTitle(title);
  };

  return (
    <header className={styles.header}>
      <div className={GLOBAL_STYLES.CONTAINER}>
        <div className={styles.header__wrapper}>
          <h1 className={styles.header__title}>{title}</h1>
          <Navigation currentTitle={updateTitle} />
        </div>
      </div>
    </header>
  );
};

export { Header };
