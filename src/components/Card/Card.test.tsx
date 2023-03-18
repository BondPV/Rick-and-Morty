import { screen, render } from '@testing-library/react';
import { Card } from './Card';
import { ICard } from '../../types/interfaces';

describe('Card render', () => {
  const card: ICard = {
    id: 1,
    name: 'test name',
    status: 'test status',
    species: 'test species',
    type: 'test type',
    gender: 'test gender',
    origin: {
      name: 'test',
      url: 'test',
    },
    location: {
      name: 'test location',
      url: 'test url',
    },
    image: 'test img',
    episode: ['test episode 1', 'test episode 2'],
    url: 'test url',
    created: 'test',
  };

  test('render one card component', () => {
    render(<Card {...card} />);
  });
});
