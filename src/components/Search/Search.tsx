import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSearch } from '../../store/searchSlice';
import styles from './Search.module.scss';

const Search = (): JSX.Element => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search.value);
  const [searchValue, setSearchValue] = useState(search);

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
