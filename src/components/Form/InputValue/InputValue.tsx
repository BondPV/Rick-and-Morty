import css from 'classnames';
import { IInputValueProps } from '../../../types/interfaces';
import styles from '../Form.module.scss';

const InputValue = (props: IInputValueProps) => {
  return (
    <div>
      <div className={styles.form__row}>
        <label htmlFor={props.name}>{props.title}</label>
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
          ref={props.forwardedRef}
        />
      </div>
      <div className={css(styles.error, !props.error && styles.hide)}>{props.error}</div>
    </div>
  );
};

export { InputValue };
