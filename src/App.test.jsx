import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Welcome to the Mentoring App!/i);
  expect(headerElement).toBeInTheDocument();
});
