import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders Agents menu', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Agents/i);
  expect(linkElement).toBeInTheDocument();
});
