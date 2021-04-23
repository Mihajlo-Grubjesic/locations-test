import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders locations page', () => {
  render(<App />);
  const linkElement = screen.getByText(/location card/i);
  expect(linkElement).toBeInTheDocument();
});
