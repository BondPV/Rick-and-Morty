import { IFormCard } from '../../types/interfaces';
import styles from './FormCard.module.scss';

const FormCard = ({ id, name, status, gender, location, image, created }: IFormCard) => {
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
            <em>created:</em> {created}
          </div>
          <div>
            <em>location:</em> {location}
          </div>
          <div>
            <em>status:</em> {status}
          </div>
        </div>
      </div>
    </div>
  );
};

export { FormCard };