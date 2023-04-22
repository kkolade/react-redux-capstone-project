import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('renders the correct header content', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByText(/sprintplex/i)).toBeInTheDocument();
    expect(screen.getByText(/14:02/i)).toBeInTheDocument();
    expect(screen.getByText(/100%/i)).toBeInTheDocument();
    expect(
      screen.getByText(/details of american companies/i),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /details/i })).toHaveAttribute(
      'href',
      '/details',
    );
    expect(screen.getByRole('link', { name: /back/i })).toHaveAttribute(
      'href',
      '/',
    );
    expect(screen.getByLabelText(/microphone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cog/i)).toBeInTheDocument();
  });
});
