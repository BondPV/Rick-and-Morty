import css from 'classnames';
import { IInputSelectProps } from '../../../types/interfaces';
import styles from '../Form.module.scss';

const InputSelect = ({ title, name, forwardedRef, children, error }: IInputSelectProps) => (
  <div>
    <div className={styles.form__row}>
      <div>{title}</div>
      <select name={name} ref={forwardedRef}>
        {children}
      </select>
    </div>
    <div className={css(styles.error, !error && styles.hide)}>{error}</div>
  </div>
);

export { InputSelect };
