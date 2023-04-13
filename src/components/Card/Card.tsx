import { useState } from 'react';
import { ICard } from '../../types/interfaces';
import { CardModal } from '../CardModal/CardModal';
import styles from './Card.module.scss';

const Card = ({ id, name, image }: ICard): JSX.Element => {
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
      {isCardModalShow && <CardModal id={id} handleCardModalShow={handleCardModalShow} />}
    </>
  );
};
export { Card };
