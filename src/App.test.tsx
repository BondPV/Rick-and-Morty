import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test('checking the navigation menu', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('checking the footer', () => {
    expect(screen.getByText('BondPV').closest('a')).toHaveAttribute(
      'href',
      'https://github.com/BondPV'
    );
  });

  test('go to route form', async () => {
    const link = screen.getByText(/form/i);
    await user.click(link);

    expect(screen.getByRole('button', { name: /Create/i })).toBeInTheDocument();
  });

  test('go to route about', async () => {
    const link = screen.getByText(/about/i);
    await user.click(link);

    expect(screen.getByText(/Warner Bros/i)).toBeInTheDocument();
  });

  test('go to route main', async () => {
    const link = screen.getByText(/main/i);
    await user.click(link);

    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
  });
});
