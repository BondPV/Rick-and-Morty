import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/searchSlice';
import styles from './Search.module.scss';

const Search = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const searchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(setSearch(searchValue));
  };

  return (
    <form className={styles.search} onSubmit={handleSearchSubmit}>
      <input
        className={styles.search__input}
        type="search"
        placeholder="search"
        value={searchValue}
        onChange={searchInputChange}
      />
      <button className={styles.search__btn}>Search</button>
    </form>
  );
};

export { Search };
