import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header component', () => {
  test('renders correctly', () => {
    const { getByText, getByRole } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByText('SPRINTPLEX')).toBeInTheDocument();
    expect(getByText('100%')).toBeInTheDocument();
    expect(getByRole('navigation')).toBeInTheDocument();
  });
});
