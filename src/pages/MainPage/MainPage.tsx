import React from 'react';
import { Search } from '../../components/Search/Search';
import { Cards } from '../../components/Cards/Cards';
import { ICard } from '../../types/interfaces';
import { GLOBAL_STYLES } from '../../constants/Constants';
import database from '../../database/source.json';
import { getStorage, StorageKey } from '../../utils/localStorage';

class MainPage extends React.Component<{}, { cards?: ICard[] }> {
  state = {
    cards: [],
  };

  componentDidMount() {
    this.searchForDatabase(getStorage(StorageKey.search) || '');
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
        <Search searchCards={this.searchForDatabase} />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}

export { MainPage };
