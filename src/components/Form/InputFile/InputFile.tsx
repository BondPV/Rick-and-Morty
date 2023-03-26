import css from 'classnames';
import styles from '../Form.module.scss';

interface IInputFileProps {
  name: string;
  error?: string;
  src: (str: string) => void;
  forwardedRef: React.RefObject<HTMLInputElement>;
}

const InputFile = ({ name, error, src, forwardedRef }: IInputFileProps) => (
  <>
    <label
      className={css(styles.form__label, error && styles.form__label_error)}
      htmlFor={name}
    ></label>
    <input
      type="file"
      id={name}
      name={name}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
          src(URL.createObjectURL(event.target.files[0]));
        }
      }}
      ref={forwardedRef}
    ></input>
  </>
);

export { InputFile };
