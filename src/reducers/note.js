import { FETCH_MY_NOTES, CREATE_NOTE } from '../actions/note';

export default function notesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_MY_NOTES:
      return action.payload;
    case CREATE_NOTE:
      return [action.payload, ...state];
    default:
      return state;
  }
}
