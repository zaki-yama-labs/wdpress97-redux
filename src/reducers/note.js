import {
  FETCH_NOTE_START,
  FETCH_NOTE_SUCCESS,
} from '../actions/note';
import {
  CREATE_STAR,
  DELETE_STAR,
} from '../actions/star';

export default function notesReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_NOTE_START:
      return null;
    case FETCH_NOTE_SUCCESS:
      return action.payload;
    case CREATE_STAR:
      if (state.id === action.payload.noteId) {
        return Object.assign({}, state, { starred: true });
      }
      return state;
    case DELETE_STAR:
      if (state.id === action.payload.noteId) {
        return Object.assign({}, state, { starred: false });
      }
      return state;
    default:
      return state;
  }
}
