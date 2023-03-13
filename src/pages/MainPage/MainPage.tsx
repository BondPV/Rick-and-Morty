import React from 'react';
import { GLOBAL_STYLES } from '../../constants/Constants';

class MainPage extends React.Component {
  render() {
    return (
      <main>
        <div className={GLOBAL_STYLES.CONTAINER}>
          <h1>Main page</h1>
        </div>
      </main>
    );
  }
}

export { MainPage };
