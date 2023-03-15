import { ICard } from '../../types/interfaces';
import { Card } from '../Card/Card';
import styles from './Cards.module.scss';

interface ICards {
  cards?: ICard[];
}

const Cards = ({ cards }: ICards) => {
  return (
    <div className={styles.cards}>
      {cards?.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export { Cards };
