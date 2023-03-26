import css from 'classnames';
import { IInputRadioProps } from '../../../types/interfaces';
import styles from '../Form.module.scss';

const InputRadio = ({ title, name, elements, error }: IInputRadioProps) => (
  <div>
    <div className={styles.form__row}>
      <div>{title}</div>
      <div className={styles.form__radio}>
        {elements.map((el) => {
          return (
            <div key={el.value}>
              <input
                type="radio"
                name={name}
                id={el.value}
                value={el.value}
                ref={el.forwardedRef}
              />
              <label htmlFor={el.value}>{el.value}</label>
            </div>
          );
        })}
      </div>
    </div>
    <div className={css(styles.error, !error && styles.hide)}>{error}</div>
  </div>
);

export { InputRadio };
