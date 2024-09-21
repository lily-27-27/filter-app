import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './styles.css'; 
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <div>
      <h1>Learn React</h1>
      <SearchBar />
      <ItemList />
    </div>
  );
}  

export default App;

