import { useSelector } from 'react-redux';
import { useGetCharactersQuery } from '../../Api/Api';
import { RootState } from '../../store';
import { Card } from '../Card/Card';
import { Preloader } from '../Preloader/Preloader';
import styles from './Cards.module.scss';

const Cards = (): JSX.Element => {
  const search = useSelector((state: RootState) => state.search.value);
  const { data, error, isFetching } = useGetCharactersQuery(search);

  if (isFetching) {
    return <Preloader />;
  }

  if (error && 'status' in error && error.status === 404) {
    return <h3>Nothing found</h3>;
  } else if (error) {
    return <h3 className={styles.error}>Something went wrong. Please try again later</h3>;
  }

  return (
    <div className={styles.cards}>
      {data?.results?.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export { Cards };
