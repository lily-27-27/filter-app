
import { combineReducers } from 'redux';
import itemsReducer from '../store/itemsSlice'; 

const rootReducer = combineReducers({
  items: itemsReducer,
  
});

export default rootReducer;
