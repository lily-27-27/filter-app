
import React from 'react';
import './SearchBar.css';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/itemsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search items..."
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
