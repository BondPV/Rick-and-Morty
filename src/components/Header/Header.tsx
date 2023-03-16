import styles from './Header.module.scss';
import { GLOBAL_STYLES, TITLE } from '../../constants/Constants';
import { Navigation } from '../Navigation/Navigation';
import React from 'react';

class Header extends React.Component<{ [key: string]: never }, { title?: string }> {
  state = {
    title: TITLE.MAIN,
  };

  updateTitle = (title: string) => {
    this.setState({ title: title });
  };

  render() {
    return (
      <header className={styles.header}>
        <div className={GLOBAL_STYLES.CONTAINER}>
          <div className={styles.header__wrapper}>
            <div className={styles.header__title}>{this.state.title}</div>
            <Navigation currentTitle={this.updateTitle} />
          </div>
        </div>
      </header>
    );
  }
}

export { Header };
