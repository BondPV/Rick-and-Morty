import React, { useEffect } from 'react';
import { ICard } from '../../types/interfaces';
import styles from './CardModal.module.scss';

interface ICardModalProps {
  card: ICard;
  handleCardModalShow: () => void;
}

const CardModal = ({ card, handleCardModalShow }: ICardModalProps): JSX.Element => {
  const { id, name, gender, image, species, status, episode, location, created }: ICard = card;
  const [createdDate] = created.split('T');

  const notClick = (e: React.MouseEvent): void => e.stopPropagation();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '5px';

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    };
  }, []);

  return (
    <div className={styles.modal} onClick={handleCardModalShow}>
      <div id={`${id}`} className={styles.card} onClick={notClick}>
        <span className={styles.close_btn} onClick={handleCardModalShow}>
          &times;
        </span>
        <div className={styles['card__img-wrap']}>
          <img src={image} alt={name} className={styles.card__img} />
        </div>
        <div className={styles.card__description}>
          <div>
            <div className={styles.card__title}>{name}</div>
            <div>
              <em>gender:</em> {gender}
            </div>
            <div>
              <em>species:</em> {species}
            </div>
            <div>
              <em>status:</em> {status}
            </div>
            <div>
              <em>locations:</em> {location.name}
            </div>
            <div>
              <em>created:</em> {createdDate}
            </div>
          </div>
          <div className={styles.card__episode}>
            <span className={styles.card__count}>{episode.length}</span>
            <em>episode count</em>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardModal };
