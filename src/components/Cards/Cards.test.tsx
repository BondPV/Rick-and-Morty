import { screen, render } from '@testing-library/react';
import { Cards } from './Cards';
import database from '../../Api/mockSource.json';
import { ICard } from '../../types/interfaces';

describe('CardsList component', () => {
  const cards: ICard[] = database.results;
  const notCards = undefined;

  test('should renders list of cards', () => {
    render(<Cards cards={cards} />);

    expect(cards.length).toBe(8);
  });

  test('should renders not cars of list', () => {
    render(<Cards cards={notCards} />);

    expect(screen.getByText('Nothing found')).toBeInTheDocument();
  });
});
