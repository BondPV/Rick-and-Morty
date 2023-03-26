import { screen, render } from '@testing-library/react';
import { Card } from './Card';
import { ICard } from '../../types/interfaces';
import database from '../../database/source.json';

describe('Card render', () => {
  const card: ICard = database.results[0];

  test('should render one card component', () => {
    render(<Card {...card} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(card.name)).toBeInTheDocument();
  });
});
