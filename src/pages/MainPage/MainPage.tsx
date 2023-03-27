import React, { useState, useEffect } from 'react';
import { Search } from '../../components/Search/Search';
import { Cards } from '../../components/Cards/Cards';
import { ICard } from '../../types/interfaces';
import { GLOBAL_STYLES } from '../../constants/Constants';
import database from '../../database/source.json';
import { getStorage, StorageKey } from '../../utils/localStorage';

const MainPage = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  const searchForDatabase = (str: string): void => {
    const findCards = database.results.filter((card) =>
      card.name.toLowerCase().includes(str.toLowerCase())
    );

    setCards(findCards);
  };

  useEffect(() => {
    searchForDatabase(getStorage(StorageKey.search) || '');
  }, []);

  return (
    <div className={GLOBAL_STYLES.CONTAINER}>
      <Search searchCards={searchForDatabase} />
      <Cards cards={cards} />
    </div>
  );
};

export { MainPage };
