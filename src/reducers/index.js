import { combineReducers } from 'redux';
import notesReducer from './note';

export default combineReducers({
  notes: notesReducer,
});

