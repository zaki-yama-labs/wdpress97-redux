import {
  CREATE_STAR,
  DELETE_STAR,
} from '../actions/star';

export default function starReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_STAR:
    case DELETE_STAR:
    default:
      return state;
  }
}
