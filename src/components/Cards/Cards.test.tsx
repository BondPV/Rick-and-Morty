import { screen, render } from '@testing-library/react';
import { Cards } from './Cards';
import database from '../../database/source.json';
import { ICard } from '../../types/interfaces';

describe('CardsList component', () => {
  const cards: ICard[] = database.results;
  const notCards = undefined;

  test('renders list of cards', () => {
    render(<Cards cards={cards} />);

    expect(cards.length).toBe(8);
  });

  test('renders not cars of list', () => {
    render(<Cards cards={notCards} />);

    expect(screen.getByText('Nothing found')).toBeInTheDocument();
  });
});