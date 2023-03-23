import css from 'classnames';
import { IInputRadioProps } from '../../../types/interfaces';
import styles from '../Form.module.scss';

const InputRadio = (props: IInputRadioProps) => {
  return (
    <div>
      <div className={styles.form__row}>
        <div>{props.title}</div>
        <div className={styles.form__radio}>
          {props.elements.map((el) => {
            return (
              <div key={el.value}>
                <input
                  type="radio"
                  name={el.name}
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
      <div className={css(styles.error, !props.error && styles.hide)}>{props.error}</div>
    </div>
  );
};

export { InputRadio };
