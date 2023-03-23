import React from 'react';
import { IFormCard } from '../../types/interfaces';
import { DEFAULT_IMG } from '../../constants/Constants';
import styles from './Form.module.scss';

interface IFormProps {
  card: (card: IFormCard) => void;
  setIsShowAlert: (show: boolean) => void;
}

interface IFormState {
  isShowAlert: boolean;
}

class Form extends React.Component<IFormProps, IFormState> {
  private nameRef = React.createRef<HTMLInputElement>();

  private locationRef = React.createRef<HTMLSelectElement>();

  private genderMaleRef = React.createRef<HTMLInputElement>();

  private genderFemaleRef = React.createRef<HTMLInputElement>();

  private createdRef = React.createRef<HTMLInputElement>();

  private imageRef = React.createRef<HTMLInputElement>();

  private statusRef = React.createRef<HTMLInputElement>();

  private previewRef = React.createRef<HTMLImageElement>();

  state = {
    isShowAlert: false,
  };

  private handleSubmit = () => {
    const newCard: IFormCard = {
      id: new Date().getTime(),
      name: this.nameRef.current!.value,
      location: this.locationRef.current!.value,
      gender: this.genderMaleRef.current!.checked
        ? this.genderMaleRef.current!.value
        : this.genderFemaleRef.current!.value,
      created: this.createdRef.current!.value,
      status: this.statusRef.current!.checked ? this.statusRef.current!.name : '',
      image: this.imageRef.current!.src,
    };

    this.props.card(newCard);

    this.setState({ isShowAlert: true });

    this.props.setIsShowAlert(true);

    this.clearInputField();
  };

  clearInputField = () => {
    this.nameRef.current!.value = '';
    this.locationRef.current!.value = '';
    this.createdRef.current!.value = '';
    this.statusRef.current!.checked = false;
    this.imageRef.current!.src = '';
    this.previewRef.current!.src = DEFAULT_IMG.SRC;
  };

  handleDownloadImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const image = URL.createObjectURL(event.target.files[0]);
    event.target.src = image;
    this.previewRef.current!.src = image;
    this.previewRef.current!.alt = this.nameRef.current!.value;
  };

  public render() {
    return (
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <div className={styles.form__wrapper}>
            <div className={styles.form__row}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Person`s name"
                id="name"
                ref={this.nameRef}
              />
            </div>

            <div className={styles.form__row}>
              <div>Location</div>
              <select name="location" ref={this.locationRef}>
                <option defaultValue="Select location" hidden></option>
                <option value="Earth (C-137)">Earth C-137</option>
                <option value="Citadel of Ricks">Citadel of Ricks</option>
                <option value="Earth (Replacement Dimension)">Earth Replacement Dimension</option>
                <option value="Abadango">Abadango</option>
              </select>
            </div>

            <div className={styles.form__row}>
              <div>Gender</div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  defaultChecked
                  ref={this.genderMaleRef}
                />
                <label htmlFor="male">male</label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  ref={this.genderFemaleRef}
                />
                <label htmlFor="female">female</label>
              </div>
            </div>

            <div className={styles.form__row}>
              <label htmlFor="created">Created</label>
              <input type="date" id="created" name="created" ref={this.createdRef} />
            </div>

            <div className={styles.form__row}>
              <label htmlFor="status">The person is alive?</label>
              <input type="checkbox" id="status" name="alive" ref={this.statusRef} />
            </div>
          </div>
          <div className={styles.form__preview}>
            <label className={styles.form__label} htmlFor="img"></label>
            <img src={DEFAULT_IMG.SRC} alt={DEFAULT_IMG.ALT} ref={this.previewRef} />
            <input
              type="file"
              id="img"
              name="image"
              onChange={this.handleDownloadImg}
              ref={this.imageRef}
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
