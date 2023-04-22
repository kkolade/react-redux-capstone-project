import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Home from '../components/Home';

const mockStore = configureMockStore()({
  companiesDetails: { companies: [], isLoading: false },
});

describe('Home component', () => {
  test('renders the Home component', () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );
  });
});
