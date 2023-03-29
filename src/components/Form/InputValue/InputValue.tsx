import { useFormContext } from 'react-hook-form';
import { ERROR_MESSAGE } from '../../../constants/Constants';
import styles from '../Form.module.scss';

interface IInputValueProps {
  title: string;
  name: string;
  type: 'text' | 'date' | 'checkbox';
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
}

const InputValue = ({ title, name, type, placeholder, minLength, maxLength }: IInputValueProps) => {
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
            minLength: {
              value: minLength || 0,
              message: `Field must contain at least ${minLength} characters`,
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
