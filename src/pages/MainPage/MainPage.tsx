import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Search } from '../../components/Search/Search';
import { Cards } from '../../components/Cards/Cards';
import { ICard, ISearchParams } from '../../types/interfaces';
import { GLOBAL_STYLES } from '../../constants/Constants';
import { Preloader } from '../../components/Preloader/Preloader';
import { getCharacters } from '../../Api/Api';
import styles from './MainPage.module.scss';
import { RootState } from '../../store';

const MainPage = (): JSX.Element => {
  const search = useSelector((state: RootState) => state.search);
  const [cards, setCards] = useState<ICard[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const searchParams: ISearchParams = {
      name: search,
      page: 1,
    };

    setLoading(true);
    filterCards(searchParams);
  }, [search]);

  return (
    <div className={GLOBAL_STYLES.CONTAINER}>
      <Search />
      {loading ? <Preloader /> : <Cards cards={cards} />}
      {error && <div className={styles.error}>Something went wrong. Please try again later</div>}
    </div>
  );
};

export { MainPage };
