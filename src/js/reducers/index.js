import {combineReducers} from 'redux';
import ListReducer from './films.js';

const allReducers = combineReducers(
  {
    users: ListReducer
  }
)
export default allReducers;
