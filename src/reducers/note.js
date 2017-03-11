import { FETCH_MY_NOTES } from '../actions/note';

export default function notesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_MY_NOTES:
      return action.payload;
    default:
      return state;
  }
}
