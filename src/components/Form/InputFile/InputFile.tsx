import css from 'classnames';
import { useFormContext } from 'react-hook-form';
import { ERROR_MESSAGE } from '../../../constants/Constants';
import styles from '../Form.module.scss';

interface IInputFileProps {
  name: string;
  src: (str: string) => void;
}

const InputFile = ({ name, src }: IInputFileProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label
        className={
          !errors[name] ? styles.form__label : css(styles.form__label, styles.form__label_error)
        }
        htmlFor={name}
      ></label>
      <input
        type="file"
        id={name}
        {...register(name, {
          required: ERROR_MESSAGE.REQUIRED,
        })}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.files) {
            src(URL.createObjectURL(event.target.files[0]));
          }
        }}
      ></input>
    </>
  );
};

export { InputFile };
