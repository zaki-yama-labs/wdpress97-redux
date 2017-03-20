import { combineReducers } from 'redux';
import notes from './notes';
import note from './note';

export default combineReducers({
  notes,
  note,
});

