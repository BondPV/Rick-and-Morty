import React from 'react';
import { IErrorMessage, IFormCard } from '../../types/interfaces';
import { LOCATIONS, DEFAULT_IMG } from '../../constants/Constants';
import { InputValue } from './InputValue/InputValue';
import { InputSelect } from './InputSelect/InputSelect';
import { InputRadio } from './InputRadio/InputRadio';
import { InputFile } from './InputFile/InputFile';
import { checkFormError } from '../../utils/checkFormErrors';
import styles from './Form.module.scss';

interface IFormProps {
  card: (card: IFormCard) => void;
  setIsShowAlert: (show: boolean) => void;
}

interface IFormState {
  errorMessage: IErrorMessage;
  isShowAlert: boolean;
}

class Form extends React.Component<IFormProps, IFormState> {
  public state = {
    errorMessage: {
      name: '',
      created: '',
      location: '',
      gender: '',
      status: '',
      image: '',
    },
    isShowAlert: false,
  };

  private elemRef = {
    form: React.createRef<HTMLFormElement>(),
    name: React.createRef<HTMLInputElement>(),
    location: React.createRef<HTMLSelectElement>(),
    created: React.createRef<HTMLInputElement>(),
    status: React.createRef<HTMLInputElement>(),
    gender: [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()],
    image: React.createRef<HTMLInputElement>(),
    preview: React.createRef<HTMLImageElement>(),
  };

  private handleSubmit = () => {
    const newCard: IFormCard = {
      id: new Date().getTime(),
      name: this.elemRef.name.current?.value || '',
      location: this.elemRef.location.current?.value || '',
      created: this.elemRef.created.current?.value || '',
      gender: '',
      status: this.elemRef.status.current?.checked ? this.elemRef.status.current!.name : '',
      image: this.elemRef.image.current?.src || '',
    };

    const genderChecked = this.elemRef.gender.find((el) => el.current?.checked);

    if (genderChecked) {
      newCard.gender = genderChecked.current?.value || '';
    }

    const validate = this.validate(newCard);

    if (validate) {
      this.props.card(newCard);

      this.setState({ isShowAlert: true });

      this.props.setIsShowAlert(true);

      this.clearInputField();
    }
  };

  private clearInputField = () => {
    this.elemRef.form.current?.reset();
    this.elemRef.image.current!.src = '';
    this.elemRef.preview.current!.src = DEFAULT_IMG.SRC;
  };

  private handelImageSrc = (src: string) => {
    this.elemRef.image.current!.src = src;
    this.elemRef.preview.current!.src = src;
    this.elemRef.preview.current!.alt = this.elemRef.name.current!.value;
  };

  private validate = (card: IFormCard) => {
    const errors: IErrorMessage = checkFormError(card);

    this.setState({ ...this.state, errorMessage: errors });

    if (Object.values(errors).length) {
      return false;
    }

    return true;
  };

  public render() {
    return (
      <div className={styles.wrapper}>
        <form className={styles.form} ref={this.elemRef.form}>
          <div className={styles.form__wrapper}>
            <InputValue
              title="Name"
              type="text"
              name="name"
              maxLength={40}
              placeholder="Person`s name"
              error={this.state.errorMessage?.name}
              forwardedRef={this.elemRef.name}
            />

            <InputSelect
              title="Location"
              name="location"
              error={this.state.errorMessage?.location}
              options={LOCATIONS}
              forwardedRef={this.elemRef.location}
            />

            <InputValue
              title="Created"
              type="date"
              name="created"
              error={this.state.errorMessage?.created}
              forwardedRef={this.elemRef.created}
            />

            <InputRadio
              title="Gender"
              name="gender"
              error={this.state.errorMessage?.gender}
              elements={[
                { value: 'male', forwardedRef: this.elemRef.gender[0] },
                { value: 'female', forwardedRef: this.elemRef.gender[1] },
              ]}
            />

            <InputValue
              title="The person is alive?"
              name="alive"
              type="checkbox"
              error={this.state.errorMessage?.status}
              forwardedRef={this.elemRef.status}
            />
          </div>
          <div className={styles.form__preview}>
            <InputFile
              name="image"
              error={this.state.errorMessage?.image}
              src={this.handelImageSrc}
              forwardedRef={this.elemRef.image}
            />
            <img src={DEFAULT_IMG.SRC} alt={DEFAULT_IMG.ALT} ref={this.elemRef.preview} />
          </div>
        </form>
        <button className={styles.form__button} onClick={this.handleSubmit}>
          Create
        </button>
      </div>
    );
  }
}

export { Form };
