import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AboutUsPage } from './AboutUsPage';

describe('About us page', () => {
  test('should render about component', () => {
    render(
      <BrowserRouter>
        <AboutUsPage />
      </BrowserRouter>
    );

    expect(screen.getByText('Rick and Morty')).toBeInTheDocument();
  });
});
