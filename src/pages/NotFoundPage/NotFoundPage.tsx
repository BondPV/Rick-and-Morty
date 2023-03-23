import React from 'react';
import { Link } from 'react-router-dom';
import { GLOBAL_STYLES } from '../../constants/Constants';
import styles from './NotFoundPage.module.scss';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className={GLOBAL_STYLES.CONTAINER}>
        <div className={styles.wrapper}>
          <div className={styles['not-found']}>
            <div>
              <span>44</span>
            </div>
            <div className={styles['not-found__description']}>
              The page you are trying to search has been moved to another universe.
            </div>
            <div>
              <Link to="/">GET ME HOME</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { NotFoundPage };
