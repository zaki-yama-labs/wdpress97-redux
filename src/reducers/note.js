import {
  FETCH_NOTE_START,
  FETCH_NOTE_SUCCESS,
} from '../actions/note';

export default function notesReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_NOTE_START:
      return null;
    case FETCH_NOTE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
