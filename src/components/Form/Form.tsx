import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { IFormCard } from '../../types/interfaces';
import { LOCATIONS, GENDER, DEFAULT_IMG, REGEX_NAME } from '../../constants/Constants';
import { InputValue } from './InputValue/InputValue';
import { InputSelect } from './InputSelect/InputSelect';
import { InputRadio } from './InputRadio/InputRadio';
import { InputFile } from './InputFile/InputFile';
import { addFormCard } from '../../store/formCardsSlice';
import { Alert } from '../Alert/Alert';
import styles from './Form.module.scss';

interface IFormInputs {
  title: string;
  name: string;
  status: boolean;
  gender: string;
  location: string;
  created: string;
  image: FileList;
}

const alertMessage = 'Card created successfully';

const Form = (): JSX.Element => {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(DEFAULT_IMG.SRC);
  const methods = useForm<IFormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const [showAlert, setShowAlert] = useState(false);
  const handleAlert = (show: boolean): void => setShowAlert(show);

  const onSubmit = (data: IFormInputs): void => {
    const status = data.status ? 'alive' : 'dead';

    const newCard: IFormCard = {
      id: new Date().getTime(),
      ...data,
      image: imagePreview,
      status: status,
    };

    dispatch(addFormCard(newCard));
    methods.reset();
    setImagePreview(DEFAULT_IMG.SRC);
    setShowAlert(true);
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
              maxLength={40}
              placeholder="Person`s name"
              regexp={REGEX_NAME}
            />
            <InputSelect title="Location" name="location" options={LOCATIONS} />
            <InputValue title="Created" name="created" type="date" />
            <InputRadio title="Gender" name="gender" elements={GENDER} />
            <InputValue title="The person is alive?" name="status" type="checkbox" />
          </div>
          <div className={styles.form__preview}>
            <InputFile name="image" src={setImagePreview} />
            <img src={imagePreview} alt={DEFAULT_IMG.ALT} />
          </div>
        </form>
        <button className={styles.form__button} onClick={methods.handleSubmit(onSubmit)}>
          Create
        </button>
      </FormProvider>
      {showAlert && <Alert message={alertMessage} isShow={showAlert} setIsShow={handleAlert} />}
    </div>
  );
};

export { Form };
