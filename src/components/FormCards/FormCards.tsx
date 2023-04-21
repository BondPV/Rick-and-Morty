import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { FormCard } from '../FormCard/FormCard';
import styles from './FormCards.module.scss';

const FormCards = (): JSX.Element => {
  const cards = useSelector((state: RootState) => state.formCards.cards);

  if (cards?.length) {
    return (
      <div className={styles.cards}>
        {cards?.map((card) => (
          <FormCard key={card.id} {...card} />
        ))}
      </div>
    );
  }

  return <h3>No cards created</h3>;
};

export { FormCards };
