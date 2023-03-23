import React from 'react';
import { getStorage, setStorage, StorageKey } from '../../utils/localStorage';
import styles from './Search.module.scss';

class Search extends React.Component<{ searchCards: (str: string) => void }, { search?: string }> {
  public state = {
    search: getStorage(StorageKey.search) || '',
  };

  public componentDidMount() {
    this.props.searchCards(this.state.search);
    setStorage(StorageKey.search, this.state.search);
  }

  public componentDidUpdate() {
    setStorage(StorageKey.search, this.state.search);
  }

  private searchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
    setStorage(StorageKey.search, this.state.search);
  };

  private handleKey = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      this.props.searchCards(this.state.search);
      setStorage(StorageKey.search, this.state.search);
    }
  };

  public render() {
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
        <button
          className={styles.search__btn}
          onClick={() => this.props.searchCards(this.state.search)}
        >
          Search
        </button>
      </div>
    );
  }
}

export { Search };
