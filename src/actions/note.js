import NoteApiClient from '../services/NoteApiClient';

export const FETCH_MY_NOTES = 'FETCH_MY_NOTES';

function fetchMyNotesSuccess(notes) {
  return {
    type: FETCH_MY_NOTES,
    payload: notes,
  };
}

export function fetchMyNotes() {
  return (dispatch) => {
    NoteApiClient.fetchMyNotes().then((notes) => {
      dispatch(fetchMyNotesSuccess(notes));
    });
  };
}
