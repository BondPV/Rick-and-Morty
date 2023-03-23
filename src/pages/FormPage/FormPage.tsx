import React from 'react';
import { Alert } from '../../components/Alert/Alert';
import { Form } from '../../components/Form/Form';
import { FormCards } from '../../components/FormCards/FormCards';
import { GLOBAL_STYLES } from '../../constants/Constants';
import { IFormCard } from '../../types/interfaces';

interface IFormPageState {
  cards?: IFormCard[];
  isShowAlert: boolean;
}

const alertMessage = 'Card created successfully';

class FormPage extends React.Component<{}, IFormPageState> {
  state = {
    cards: [],
    isShowAlert: false,
  };

  addCard = (card: IFormCard) => {
    const updateCards: IFormCard[] = [...this.state.cards];
    updateCards.push(card);
    this.setState({ cards: updateCards });
  };

  setIsShowAlert = (show: boolean) => {
    show ? this.setState({ isShowAlert: true }) : this.setState({ isShowAlert: false });
  };

  render() {
    return (
      <div className={GLOBAL_STYLES.CONTAINER}>
        <Form card={this.addCard} setIsShowAlert={this.setIsShowAlert} />
        {this.state.isShowAlert ? (
          <Alert
            message={alertMessage}
            isShow={this.state.isShowAlert}
            setIsShow={this.setIsShowAlert}
          />
        ) : (
          ''
        )}
        <FormCards cards={this.state.cards} />
      </div>
    );
  }
}

export { FormPage };
