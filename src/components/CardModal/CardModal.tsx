import { useGetCharacterQuery } from '../../Api/Api';
import { dateStringConversion } from '../../utils/dateStringConversion';
import { Preloader } from '../Preloader/Preloader';
import styles from './CardModal.module.scss';

interface ICardModalProps {
  id: number;
  handleCardModalShow: () => void;
}

const CardModal = ({ id, handleCardModalShow }: ICardModalProps): JSX.Element => {
  const { data: card, error, isFetching } = useGetCharacterQuery(id);

  const handleClick = (e: React.MouseEvent): void => e.stopPropagation();

  let cardBody: JSX.Element = <></>;

  if (isFetching) {
    cardBody = (
      <div className={styles.preloader}>
        <Preloader />
      </div>
    );
  }

  if (card) {
    const date = dateStringConversion(card.created);
    cardBody = (
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
              <em>created:</em> {date}
            </div>
          </div>
          <div className={styles.card__episode}>
            <span className={styles.card__count}>{card.episode?.length}</span>
            <em>episode count</em>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    cardBody = (
      <div className={styles.preloader}>
        <div>Something went wrong.</div>
      </div>
    );
  }

  return (
    <div className={styles.modal} onClick={handleCardModalShow}>
      <div id={`${id}`} className={styles.card} onClick={handleClick}>
        <span className={styles.close_btn} onClick={handleCardModalShow} data-testid="close">
          &times;
        </span>
        {cardBody}
      </div>
    </div>
  );
};

export { CardModal };
