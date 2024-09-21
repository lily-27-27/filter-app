
import reducer, { setSearchTerm } from './itemsSlice';

describe('itemsSlice', () => {
  const initialState = {
    list: [
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 
      'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'
    ],
    searchTerm: '',
    currentPage: 1,
    itemsPerPage: 5,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle setting the search term', () => {
    const actual = reducer(initialState, setSearchTerm('Item'));
    expect(actual.searchTerm).toEqual('Item');
    expect(actual.currentPage).toEqual(1); 
  });
});
