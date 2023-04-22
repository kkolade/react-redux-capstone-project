import '@testing-library/jest-dom/extend-expect'; // import the toBeInTheDocument function
import { render } from '@testing-library/react';
import React from 'react';
import HomePageItems from '../components/HomePageItems';

describe('HomePageItems', () => {
  it('renders the name and symbol props correctly', () => {
    const name = 'Test Company';
    const symbol = 'TC';

    const { getByText } = render(<HomePageItems name={name} symbol={symbol} />);

    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(symbol)).toBeInTheDocument();
  });
});
