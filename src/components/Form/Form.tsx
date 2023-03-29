import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IFormCard } from '../../types/interfaces';
import { LOCATIONS, GENDER, DEFAULT_IMG } from '../../constants/Constants';
import { InputValue } from './InputValue/InputValue';
import { InputSelect } from './InputSelect/InputSelect';
import { InputRadio } from './InputRadio/InputRadio';
import { InputFile } from './InputFile/InputFile';
import styles from './Form.module.scss';

interface IFormProps {
  card: (card: IFormCard) => void;
  setIsShowAlert: (show: boolean) => void;
}

interface IFormInputs {
  title: string;
  name: string;
  status: string;
  gender: string;
  location: string;
  created: string;
}

const Form = ({ card, setIsShowAlert }: IFormProps) => {
  const [picture, setPicture] = useState(DEFAULT_IMG.SRC);
  const methods = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => {
    const newCard: IFormCard = {
      id: new Date().getTime(),
      ...data,
      image: picture,
    };

    card(newCard);
    methods.reset();
    setPicture(DEFAULT_IMG.SRC);
    setIsShowAlert(true);
  };

  return (
    <div className={styles.wrapper}>
      <FormProvider {...methods}>
        <form className={styles.form}>
          <div className={styles.form__wrapper}>
            <InputValue
              title="Name"
              name="name"
              type="text"
              minLength={3}
              maxLength={40}
              placeholder="Person`s name"
            />
            <InputSelect title="Location" name="location" options={LOCATIONS} />
            <InputValue title="Created" name="created" type="date" />
            <InputRadio title="Gender" name="gender" elements={GENDER} />
            <InputValue title="The person is alive?" name="alive" type="checkbox" />
          </div>
          <div className={styles.form__preview}>
            <InputFile name="image" src={setPicture} />
            <img src={picture} alt={DEFAULT_IMG.ALT} />
          </div>
        </form>
        <button className={styles.form__button} onClick={methods.handleSubmit(onSubmit)}>
          Create
        </button>
      </FormProvider>
    </div>
  );
};

export { Form };
