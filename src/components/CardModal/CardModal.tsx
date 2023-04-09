import React, { useEffect, useState } from 'react';
import { getCharacter } from '../../Api/Api';
import { ICard } from '../../types/interfaces';
import { Preloader } from '../Preloader/Preloader';
import styles from './CardModal.module.scss';

interface ICardModalProps {
  id: number;
  handleCardModalShow: () => void;
}

const CardModal = ({ id, handleCardModalShow }: ICardModalProps): JSX.Element => {
  const [card, setCard] = useState<Partial<ICard>>({
    id: 0,
    name: '',
    gender: '',
    image: '',
    species: '',
    status: '',
    episode: [],
    location: { name: '', url: '' },
    created: '',
  });
  const [loading, setLoading] = useState(true);

  const getCardInfo = async (id: number): Promise<void> => {
    const cardInfo = await getCharacter(id);

    if (cardInfo) {
      setLoading(false);
      setCard(cardInfo);
    }
  };

  const [createdDate] = card.created?.split('T') || '';

  const notClick = (e: React.MouseEvent): void => e.stopPropagation();

  useEffect(() => {
    getCardInfo(id);
  }, [id]);

  return (
    <div className={styles.modal} onClick={handleCardModalShow}>
      <div id={`${id}`} className={styles.card} onClick={notClick}>
        <span className={styles.close_btn} onClick={handleCardModalShow} data-testid="close">
          &times;
        </span>

        {loading ? (
          <div className={styles.preloader}>
            <Preloader />
          </div>
        ) : (
          <div className={styles.card__body}>
            <div className={styles['card__img-wrap']}>
              <img src={card.image} alt={card.name} className={styles.card__img} />
            </div>
            <div className={styles.card__description}>
              <div>
                <div className={styles.card__title}>{card.name}</div>
                <div>
                  <em>gender:</em> {card.gender}
                </div>
                <div>
                  <em>species:</em> {card.species}
                </div>
                <div>
                  <em>status:</em> {card.status}
                </div>
                <div>
                  <em>locations:</em> {card.location?.name}
                </div>
                <div>
                  <em>created:</em> {createdDate}
                </div>
              </div>
              <div className={styles.card__episode}>
                <span className={styles.card__count}>{card.episode?.length}</span>
                <em>episode count</em>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { CardModal };
