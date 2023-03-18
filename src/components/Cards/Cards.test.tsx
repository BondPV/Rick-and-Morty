import { render } from '@testing-library/react';
import { Cards } from './Cards';

describe('CardsList component', () => {
  test('renders list of cards', () => {
    render(<Cards />);
  });
});
