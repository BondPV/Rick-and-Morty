import { screen, render } from '@testing-library/react';
import { FormCard } from './FormCard';
import { IFormCard } from '../../types/interfaces';

const card: IFormCard = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  gender: 'Male',
  location: 'Citadel of Ricks',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  created: '2017-11-04',
};

describe('Form card render', () => {
  test('should render one form card component', () => {
    render(<FormCard {...card} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(card.name)).toBeInTheDocument();
  });
});
