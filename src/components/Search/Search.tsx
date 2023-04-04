import React, { useEffect, useRef, useState } from 'react';
import { getStorage, setStorage, StorageKey } from '../../utils/localStorage';
import styles from './Search.module.scss';

interface ISearchProps {
  searchCards: (value: string) => void;
}

const Search = ({ searchCards }: ISearchProps): JSX.Element => {
  const [search, setSearch] = useState(() => getStorage(StorageKey.search) || '');
  const inputRef = useRef(search);

  const searchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    searchCards(search);
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
    <form className={styles.search} onSubmit={handleSearchSubmit}>
      <input
        className={styles.search__input}
        type="search"
        placeholder="search"
        value={search}
        onChange={searchInputChange}
      />
      <button className={styles.search__btn}>Search</button>
    </form>
  );
};

export { Search };
