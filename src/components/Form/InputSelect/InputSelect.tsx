import { useFormContext } from 'react-hook-form';
import { ERROR_MESSAGE } from '../../../constants/Constants';
import styles from '../Form.module.scss';

interface IInputSelectProps {
  title: string;
  name: string;
  options: string[];
}

const InputSelect = ({ title, name, options }: IInputSelectProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className={styles.form__row}>
        <div>{title}</div>
        <select
          {...register(name, {
            required: ERROR_MESSAGE.REQUIRED,
          })}
        >
          <option defaultValue="default" hidden></option>
          {options?.map((elem) => (
            <option key={elem} value={elem}>
              {elem}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.error}>
        {errors[name] && `${errors[name]?.message || ERROR_MESSAGE.DEFAULT}`}
      </div>
    </div>
  );
};

export { InputSelect };
