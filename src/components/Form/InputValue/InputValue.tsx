import { useFormContext } from 'react-hook-form';
import { ERROR_MESSAGE, REGEX_ANY } from '../../../constants/Constants';
import styles from '../Form.module.scss';

interface IInputValueProps {
  title: string;
  name: string;
  type: 'text' | 'date' | 'checkbox';
  placeholder?: string;
  maxLength?: number;
  regexp?: RegExp;
}

const InputValue = ({ title, name, type, placeholder, maxLength, regexp }: IInputValueProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className={styles.form__row}>
        <label htmlFor={name}>{title}</label>
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          {...register(name, {
            required: ERROR_MESSAGE.REQUIRED,
            pattern: {
              value: regexp || REGEX_ANY,
              message: 'Minimum 3 characters, maximum 3 words, first letter of each in uppercase',
            },
          })}
        />
      </div>
      <div className={styles.error}>
        {errors[name] && `${errors[name]?.message || ERROR_MESSAGE.DEFAULT}`}
      </div>
    </div>
  );
};

export { InputValue };
