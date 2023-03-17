import { ICard } from '../../types/interfaces';
import styles from './Card.module.scss';

const Card = ({ id, name, gender, image, species, episode }: ICard) => {
  return (
    <div id={`${id}`} className={styles.card}>
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
        </div>
        <div className={styles.card__episode}>
          <span className={styles.card__count}>{episode.length}</span>
          <em>episode count</em>
        </div>
      </div>
    </div>
  );
};

export { Card };
