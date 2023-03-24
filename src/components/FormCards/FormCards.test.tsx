import { screen, render } from '@testing-library/react';
import { FormCards } from './FormCards';
import { IFormCard } from '../../types/interfaces';

const cards: IFormCard[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    gender: 'Male',
    location: 'Citadel of Ricks',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    created: '2017-11-04',
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    gender: 'Male',
    location: 'Citadel of Ricks',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    created: '2017-11-04',
  },
];

describe('Form CardsList component', () => {
  const notCards = undefined;

  test('renders list of cards', () => {
    render(<FormCards cards={cards} />);

    expect(cards.length).toBe(2);
  });

  test('renders not cars of list', () => {
    render(<FormCards cards={notCards} />);

    expect(screen.getByText('No cards created')).toBeInTheDocument();
  });
});
