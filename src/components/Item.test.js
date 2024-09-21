import React from 'react';
import { render, act } from '@testing-library/react';
import Item from './Item';

test('renders the item correctly', () => {
  let getByText;
  
  act(() => {
    ({ getByText } = render(<Item item="Test Item" />));
  });

  expect(getByText(/Test Item/i)).toBeInTheDocument();
});


