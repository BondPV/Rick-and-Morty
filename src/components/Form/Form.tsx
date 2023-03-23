import React from 'react';
import { IFormCard } from '../../types/interfaces';
import { DEFAULT_IMG } from '../../constants/Constants';
import { InputValue } from './InputValue/InputValue';
import { InputSelect } from './InputSelect/InputSelect';
import styles from './Form.module.scss';
import { InputRadio } from './InputRadio/InputRadio';

interface IFormProps {
  card: (card: IFormCard) => void;
  setIsShowAlert: (show: boolean) => void;
}

interface IFormState {
  errorMessage: {
    name?: string;
    created?: string;
    location?: string;
    gender?: string;
    status?: string;
  };
  isShowAlert: boolean;
}

class Form extends React.Component<IFormProps, IFormState> {
  private elementsRef = {
    name: React.createRef<HTMLInputElement>(),
    location: React.createRef<HTMLSelectElement>(),
    created: React.createRef<HTMLInputElement>(),
    status: React.createRef<HTMLInputElement>(),
    gender: {
      male: React.createRef<HTMLInputElement>(),
      female: React.createRef<HTMLInputElement>(),
    },
    image: React.createRef<HTMLInputElement>(),
    preview: React.createRef<HTMLImageElement>(),
  };

  public state = {
    errorMessage: {
      name: '',
      created: '',
      location: '',
      gender: '',
      status: '',
    },
    isShowAlert: false,
  };

  private handleSubmit = () => {
    const newCard: IFormCard = {
      id: new Date().getTime(),
      name: this.elementsRef.name.current!.value,
      location: this.elementsRef.location.current!.value,
      created: this.elementsRef.created.current!.value,
      gender: this.elementsRef.gender.male.current!.checked
        ? this.elementsRef.gender.male.current!.value
        : this.elementsRef.gender.female.current!.value,
      status: this.elementsRef.status.current!.checked ? this.elementsRef.status.current!.name : '',
      image: this.elementsRef.image.current!.src,
    };

    this.props.card(newCard);

    this.setState({ isShowAlert: true });

    this.props.setIsShowAlert(true);

    this.clearInputField();
  };

  private clearInputField = () => {
    this.elementsRef.name.current!.value = '';
    this.elementsRef.location.current!.value = '';
    this.elementsRef.created.current!.value = '';
    this.elementsRef.gender.male.current!.checked = false;
    this.elementsRef.gender.female.current!.checked = false;
    this.elementsRef.status.current!.checked = false;
    this.elementsRef.image.current!.src = '';
    this.elementsRef.preview.current!.src = DEFAULT_IMG.SRC;
  };

  private handleDownloadImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const image = URL.createObjectURL(event.target.files[0]);
    event.target.src = image;
    this.elementsRef.preview.current!.src = image;
    this.elementsRef.preview.current!.alt = this.elementsRef.name.current!.value;
  };

  public render() {
    return (
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <div className={styles.form__wrapper}>
            <InputValue
              title="Name"
              type="text"
              name="name"
              placeholder="Person`s name"
              error={this.state.errorMessage?.name}
              forwardedRef={this.elementsRef.name}
            />

            <InputSelect
              title="Location"
              name="location"
              error={this.state.errorMessage?.location}
              forwardedRef={this.elementsRef.location}
            >
              <option defaultValue="Select location" hidden></option>
              <option value="Earth (C-137)">Earth C-137</option>
              <option value="Citadel of Ricks">Citadel of Ricks</option>
              <option value="Earth (Replacement Dimension)">Earth Replacement Dimension</option>
              <option value="Abadango">Abadango</option>
            </InputSelect>

            <InputValue
              title="Created"
              type="date"
              name="created"
              error={this.state.errorMessage?.created}
              forwardedRef={this.elementsRef.created}
            />

            <InputRadio
              title="Gender"
              error={this.state.errorMessage?.gender}
              elements={[
                { name: 'gender', value: 'male', forwardedRef: this.elementsRef.gender.male },
                { name: 'gender', value: 'female', forwardedRef: this.elementsRef.gender.female },
              ]}
            />

            <InputValue
              title="The person is alive?"
              name="alive"
              type="checkbox"
              error={this.state.errorMessage?.status}
              forwardedRef={this.elementsRef.status}
            />
          </div>
          <div className={styles.form__preview}>
            <label className={styles.form__label} htmlFor="img"></label>
            <img src={DEFAULT_IMG.SRC} alt={DEFAULT_IMG.ALT} ref={this.elementsRef.preview} />
            <input
              type="file"
              id="img"
              name="image"
              onChange={this.handleDownloadImg}
              ref={this.elementsRef.image}
            ></input>
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
