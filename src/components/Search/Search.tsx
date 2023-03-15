import React from 'react';
import styles from './Search.module.scss';

class Search extends React.Component<{ search: (str: string) => void }, { search?: string }> {
  state = {
    search: '',
  };

  handleKey = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      this.props.search(this.state.search);
    }
  };

  render() {
    return (
      <div className={styles.search}>
        <input
          className={styles.search__input}
          type="search"
          placeholder="search"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
          onKeyDown={this.handleKey}
        />
        <button className={styles.search__btn} onClick={() => this.props.search(this.state.search)}>
          Search
        </button>
      </div>
    );
  }
}

export { Search };
