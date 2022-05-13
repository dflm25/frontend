import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('shows validation error when form is invalid', () => {
    render(<App />);

    userEvent.click(screen.getByText('Next'));

    expect(
      screen.getByText('You must select at least one value for each question')
    ).toBeInTheDocument();
  });
});
