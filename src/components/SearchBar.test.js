import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import SearchBar from './SearchBar';
import { store } from '../store/store'; 

test('renders input field', () => {
  act(() => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });

  const inputElement = screen.getByPlaceholderText(/Search items.../i);
  expect(inputElement).toBeInTheDocument();
});



