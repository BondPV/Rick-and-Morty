import React from 'react';
import { Form } from '../../components/Form/Form';
import { FormCards } from '../../components/FormCards/FormCards';
import { GLOBAL_STYLES } from '../../constants/Constants';
import { IFormCard } from '../../types/interfaces';

class FormPage extends React.Component<{}, { cards?: IFormCard[] }> {
  state = {
    cards: [],
  };

  addCard = (card: IFormCard) => {
    const updateCards: IFormCard[] = [...this.state.cards];
    updateCards.push(card);
    this.setState({ cards: updateCards });
  };

  render() {
    return (
      <div className={GLOBAL_STYLES.CONTAINER}>
        <Form card={this.addCard} />
        <FormCards cards={this.state.cards} />
      </div>
    );
  }
}

export { FormPage };
