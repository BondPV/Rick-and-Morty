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

  searchForDatabase = (str: string) => {
    const findCards = database.results.filter((card) =>
      card.name.toLowerCase().includes(str.toLowerCase())
    );
    this.setState({ cards: findCards });
  };

  render() {
    return (
      <div className={GLOBAL_STYLES.CONTAINER}>
        <h1>Rick and Morty</h1>
        <Search search={this.searchForDatabase} />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}

export { MainPage };
