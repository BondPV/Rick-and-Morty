import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  test('should render navigation component', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
