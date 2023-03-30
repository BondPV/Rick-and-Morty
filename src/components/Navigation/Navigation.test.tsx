import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  const title = () => console.log('title');

  test('should render navigation component', () => {
    render(
      <BrowserRouter>
        <Navigation currentTitle={title} />
      </BrowserRouter>
    );

    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
