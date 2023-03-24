import css from 'classnames';
import styles from '../Form.module.scss';

interface IInputFileProps {
  name: string;
  error?: string;
  src: (str: string) => void;
  forwardedRef: React.RefObject<HTMLInputElement>;
}

const InputFile = (props: IInputFileProps) => {
  return (
    <>
      <label
        className={css(styles.form__label, props.error && styles.form__label_error)}
        htmlFor={props.name}
      ></label>
      <input
        type="file"
        id={props.name}
        name={props.name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.files) {
            props.src(URL.createObjectURL(event.target.files[0]));
          }
        }}
        ref={props.forwardedRef}
      ></input>
    </>
  );
};

export { InputFile };
