import React from 'react';
import { getStorage, setStorage, StorageKey } from '../../utils/localStorage';
import styles from './Search.module.scss';

class Search extends React.Component<{ search: (str: string) => void }, { search?: string }> {
  state = {
    search: getStorage(StorageKey.search) || '',
  };

  componentDidMount() {
    setStorage(StorageKey.search, this.state.search);
  }

  componentDidUpdate() {
    setStorage(StorageKey.search, this.state.search);
  }

  searchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
    setStorage(StorageKey.search, this.state.search);
  };

  handleKey = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      this.props.search(this.state.search);
      setStorage(StorageKey.search, this.state.search);
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
          onChange={this.searchInputChange}
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
