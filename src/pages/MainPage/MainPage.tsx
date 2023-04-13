import { useState, useEffect } from 'react';
import { Search } from '../../components/Search/Search';
import { Cards } from '../../components/Cards/Cards';
import { ICard, ISearchParams } from '../../types/interfaces';
import { GLOBAL_STYLES } from '../../constants/Constants';
import { getStorage, StorageKey } from '../../utils/localStorage';
import { Preloader } from '../../components/Preloader/Preloader';
import { getCharacters } from '../../Api/Api';
import styles from './MainPage.module.scss';

const MainPage = (): JSX.Element => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState<ISearchParams>({
    name: getStorage(StorageKey.search) || '',
    page: 1,
  });

  const filterCards = async (params: ISearchParams): Promise<void> => {
    const filteredCards = await getCharacters(params);

    if (filteredCards) {
      setLoading(false);
      setError(false);
      setCards(filteredCards);
    } else {
      setError(true);
    }
  };

  const searchCards = (value: string): void => setSearchParams({ ...searchParams, name: value });

  useEffect(() => {
    setLoading(true);
    filterCards(searchParams);
  }, [searchParams]);

  return (
    <div className={GLOBAL_STYLES.CONTAINER}>
      <Search searchCards={searchCards} />
      {loading ? <Preloader /> : <Cards cards={cards} />}
      {error && <div className={styles.error}>Something went wrong. Please try again later</div>}
    </div>
  );
};

export { MainPage };
