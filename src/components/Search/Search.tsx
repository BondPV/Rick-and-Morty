import React, { useEffect, useRef, useState } from 'react';
import { getStorage, setStorage, StorageKey } from '../../utils/localStorage';
import styles from './Search.module.scss';

interface ISearchProps {
  searchCards: (str: string) => void;
}

const Search = ({ searchCards }: ISearchProps) => {
  const [search, setSearch] = useState(() => getStorage(StorageKey.search) || '');
  const inputRef = useRef(search);

  const searchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const handleKey = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (event.key === 'Enter') {
      searchCards(search);
    }
  };

  useEffect(() => {
    inputRef.current = search;
  }, [search]);

  useEffect(() => {
    return () => {
      setStorage(StorageKey.search, inputRef.current);
    };
  }, []);

  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        type="search"
        placeholder="search"
        value={search}
        onChange={searchInputChange}
        onKeyDown={handleKey}
      />
      <button className={styles.search__btn} onClick={() => searchCards(search)}>
        Search
      </button>
    </div>
  );
};

export { Search };
