import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

describe('App', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });

  test('should checking the navigation menu', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('should checking the footer', () => {
    expect(screen.getByText('BondPV').closest('a')).toHaveAttribute(
      'href',
      'https://github.com/BondPV'
    );
  });

  test('should go to route form', async () => {
    const link = screen.getByText(/form/i);
    await user.click(link);

    expect(screen.getByRole('button', { name: /Create/i })).toBeInTheDocument();
  });

  test('should go to route about', async () => {
    const link = screen.getByText(/about/i);
    await user.click(link);

    expect(screen.getByText(/Warner Bros/i)).toBeInTheDocument();
  });

  test('should go to route main', async () => {
    const link = screen.getByText(/main/i);
    await user.click(link);

    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
  });
});
