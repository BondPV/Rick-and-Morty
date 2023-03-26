import css from 'classnames';
import { IInputValueProps } from '../../../types/interfaces';
import styles from '../Form.module.scss';

const InputValue = ({
  name,
  title,
  type,
  maxLength,
  placeholder,
  forwardedRef,
  error,
}: IInputValueProps) => (
  <div>
    <div className={styles.form__row}>
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        name={name}
        id={name}
        maxLength={maxLength}
        placeholder={placeholder}
        ref={forwardedRef}
      />
    </div>
    <div className={css(styles.error, !error && styles.hide)}>{error}</div>
  </div>
);

export { InputValue };
