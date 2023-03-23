import { screen, render } from '@testing-library/react';
import { Card } from './Card';
import { ICard } from '../../types/interfaces';
import database from '../../database/source.json';

describe('Card render', () => {
  const card: ICard = database.results[0];

  test('render one card component', () => {
    render(<Card {...card} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(card.name)).toBeInTheDocument();
    expect(screen.getByText(/gender:/i)).toBeInTheDocument();
    expect(screen.getByText(/species:/i)).toBeInTheDocument();
    expect(screen.getByText(/episode/i)).toBeInTheDocument();
  });
});
