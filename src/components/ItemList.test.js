
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../store/rootReducer'; 
import ItemList from './ItemList';

// Mocking the initial state of the store
const mockInitialState = {
  items: {
    list: ['Item 1', 'Item 2', 'Item 3'], // Sample items
    searchTerm: '',
    currentPage: 1,
    itemsPerPage: 5,
  },
};

const mockStore = createStore((state = mockInitialState) => state); 

test('renders item list based on Redux state', () => {
  render(
    <Provider store={mockStore}>
      <ItemList />
    </Provider>
  );

  const itemElements = screen.getAllByRole('listitem');
  expect(itemElements.length).toBe(mockInitialState.items.list.length); 
});
