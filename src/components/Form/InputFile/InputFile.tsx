import css from 'classnames';
import { useFormContext } from 'react-hook-form';
import { ERROR_MESSAGE } from '../../../constants/Constants';
import styles from '../Form.module.scss';

interface IInputFileProps {
  name: string;
  src: (imgUrl: string) => void;
}

const InputFile = ({ name, src }: IInputFileProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    try {
      if (event.target.files) {
        src(URL.createObjectURL(event.target.files[0]));
      }
    } catch (error) {
      alert('file upload error');
    }
  };

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
        onChange={handleImageChange}
        data-testid="input-file"
      ></input>
      <div className={css(styles.error, styles.error_upload)}>
        {errors[name] && errors[name]?.type === 'required' && ERROR_MESSAGE.REQUIRED}
      </div>
    </>
  );
};

export { InputFile };
