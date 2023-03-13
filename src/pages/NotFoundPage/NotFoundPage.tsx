import React from 'react';
import { Link } from 'react-router-dom';
import { GLOBAL_STYLES } from '../../constants/Constants';

class NotFoundPage extends React.Component {
  render() {
    return (
      <main>
        <div className={GLOBAL_STYLES.CONTAINER}>
          This page does not exist. Go <Link to="/">Main</Link>
        </div>
      </main>
    );
  }
}

export { NotFoundPage };
