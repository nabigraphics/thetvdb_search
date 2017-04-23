import { combineReducers } from 'redux';
import search from './search';
import series from './series';

const reducers = combineReducers({
  search,series
})

export default reducers;
