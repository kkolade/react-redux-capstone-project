import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  test('renders header and home components', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const headerElement = screen.getByTestId('header');
    const homeElement = screen.getByTestId('home');

    expect(headerElement).toBeInTheDocument();
    expect(homeElement).toBeInTheDocument();
  });
});
