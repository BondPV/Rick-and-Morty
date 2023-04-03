import { useState, useEffect } from 'react';
import { Search } from '../../components/Search/Search';
import { Cards } from '../../components/Cards/Cards';
import { ICard, ISearchParams } from '../../types/interfaces';
import { GLOBAL_STYLES } from '../../constants/Constants';
import { getStorage, StorageKey } from '../../utils/localStorage';
import { Preloader } from '../../components/Preloader/Preloader';
import { getCharacters } from '../../Api/Api';

const MainPage = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState<ISearchParams>({
    name: getStorage(StorageKey.search) || '',
    page: 1,
  });

  // const searchForDatabase = async (params: ISearchParams): Promise<void> => {
  //   const findCards = await getCharacters(searchParams);

  //   if (findCards) {
  //     setLoading(false);
  //     setCards(findCards);
  //   }
  // };

  const filterCards = async (params: ISearchParams): Promise<void> => {
    const filteredCards = await getCharacters(params);

    if (filteredCards) {
      setLoading(false);
      setCards(filteredCards);
    }
  };

  const searchCards = (value: string) => setSearchParams({ ...searchParams, name: value });

  useEffect(() => {
    // const search = getStorage(StorageKey.search) || '';
    // setSearchParams({ ...searchParams, name: search });
    filterCards(searchParams);
  }, [searchParams]);

  return (
    <div className={GLOBAL_STYLES.CONTAINER}>
      <Search searchCards={searchCards} />
      {loading ? <Preloader /> : <Cards cards={cards} />}
    </div>
  );
};

export { MainPage };
