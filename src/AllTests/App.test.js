import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const incr = screen.getByText(/Click me/i);
  fireEvent.click(incr);
  const h1tag = screen.getByRole('heading');
  expect(h1tag.textContent === 'Current 1').toBeTruthy();
});