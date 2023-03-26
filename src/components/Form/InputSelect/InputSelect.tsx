import css from 'classnames';
import { IInputSelectProps } from '../../../types/interfaces';
import styles from '../Form.module.scss';

const InputSelect = ({ title, name, forwardedRef, options, error }: IInputSelectProps) => (
  <div>
    <div className={styles.form__row}>
      <div>{title}</div>
      <select name={name} ref={forwardedRef}>
        <option defaultValue="default" hidden></option>
        {options?.map((elem) => (
          <option key={elem} value={elem}>
            {elem}
          </option>
        ))}
      </select>
    </div>
    <div className={css(styles.error, !error && styles.hide)}>{error}</div>
  </div>
);

export { InputSelect };
