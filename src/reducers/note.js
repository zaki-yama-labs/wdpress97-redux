import {
  FETCH_MY_NOTES,
  CREATE_NOTE,
  UPDATE_NOTE,
} from '../actions/note';

export default function notesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_MY_NOTES:
      return action.payload;
    case CREATE_NOTE:
      return [action.payload, ...state];
    case UPDATE_NOTE:
      return state.map((note) => {
        return note.id === action.payload.id ? Object.assign({}, note, action.payload) : note;
      });
    default:
      return state;
  }
}
