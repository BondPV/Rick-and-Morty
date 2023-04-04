import { useState } from 'react';
import { ICard } from '../../types/interfaces';
import { CardModal } from '../CardModal/CardModal';
import styles from './Card.module.scss';

const Card = (card: ICard): JSX.Element => {
  const { id, name, image }: ICard = card;
  const [isCardModalShow, setCardModalShow] = useState(false);

  const handleCardModalShow = (): void => setCardModalShow(!isCardModalShow);

  return (
    <>
      <div id={`${id}`} className={styles.card} onClick={handleCardModalShow}>
        <div className={styles['card__img-wrap']}>
          <img src={image} alt={name} className={styles.card__img} />
        </div>
        <div className={styles.card__description}>{name}</div>
      </div>
      {isCardModalShow ? <CardModal card={card} handleCardModalShow={handleCardModalShow} /> : ''}
    </>
  );
};
export { Card };
