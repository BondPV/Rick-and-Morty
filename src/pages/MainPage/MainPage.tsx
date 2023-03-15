import React from 'react';
import { Search } from '../../components/Search/Search';
import { Cards } from '../../components/Cards/Cards';
import { ICard } from '../../types/interfaces';
import { GLOBAL_STYLES } from '../../constants/Constants';
import database from '../../database/source.json';

class MainPage extends React.Component {
  state: { cards: ICard[] } = {
    cards: [],
  };

  componentDidMount() {
    this.setState({ cards: database.results });
  }

  render() {
    return (
      <div className={GLOBAL_STYLES.CONTAINER}>
        <h1>Main page</h1>
        <Search />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}

export { MainPage };
