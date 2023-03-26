import { screen, render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  test('should render footer component', () => {
    render(<Footer />);

    expect(screen.getByText('2023')).toBeInTheDocument();

    expect(screen.getByText('BondPV').closest('a')).toHaveAttribute(
      'href',
      'https://github.com/BondPV'
    );
  });
});
