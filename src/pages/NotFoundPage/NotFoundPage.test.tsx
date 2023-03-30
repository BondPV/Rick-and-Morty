import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';

describe('Not found page', () => {
  test('should render not found component', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    expect(screen.getByRole('link')).toHaveTextContent('GET ME HOME');
  });
});
