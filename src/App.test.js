
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/store/rootReducer'; 
import App from './App';

const mockStore = createStore(rootReducer, {
  items: {
    list: [],
    currentPage: 1,
    itemsPerPage: 5,
    searchTerm: '',
  },
});

test('renders the search bar', () => {
  render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );

  const searchBarElement = screen.getByPlaceholderText(/search items.../i);
  expect(searchBarElement).toBeInTheDocument();
});


