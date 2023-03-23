import css from 'classnames';
import { IInputSelectProps } from '../../../types/interfaces';
import styles from '../Form.module.scss';

const InputSelect = (props: IInputSelectProps) => {
  return (
    <div>
      <div className={styles.form__row}>
        <div>{props.title}</div>
        <select name={props.name} ref={props.forwardedRef}>
          {props.children}
        </select>
      </div>
      <div className={css(styles.error, !props.error && styles.hide)}>{props.error}</div>
    </div>
  );
};

export { InputSelect };
