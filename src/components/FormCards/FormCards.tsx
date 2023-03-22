import { IFormCard } from '../../types/interfaces';
import { FormCard } from '../FormCard/FormCard';
import styles from './FormCards.module.scss';

interface IFormCards {
  cards?: IFormCard[];
}

const FormCards = ({ cards }: IFormCards) => {
  if (cards?.length) {
    return (
      <div className={styles.cards}>
        {cards?.map((card) => (
          <FormCard key={card.id} {...card} />
        ))}
      </div>
    );
  } else {
    return <h3>No cards created</h3>;
  }
};

export { FormCards };
