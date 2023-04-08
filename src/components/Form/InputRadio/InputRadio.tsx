import { useFormContext } from 'react-hook-form';
import { ERROR_MESSAGE } from '../../../constants/Constants';
import styles from '../Form.module.scss';

interface IInputRadioProps {
  title: string;
  name: string;
  elements: string[];
}

const InputRadio = ({ title, name, elements }: IInputRadioProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className={styles.form__row}>
        <div>{title}</div>
        <div className={styles.form__radio}>
          {elements.map((element) => (
            <div key={element}>
              <input
                type="radio"
                id={element}
                value={element}
                {...register(name, {
                  required: ERROR_MESSAGE.REQUIRED,
                })}
              />
              <label htmlFor={element}>{element}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.error}>
        {errors[name] && `${errors[name]?.message || ERROR_MESSAGE.DEFAULT}`}
      </div>
    </div>
  );
};

export { InputRadio };
