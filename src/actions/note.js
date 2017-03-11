import NoteApiClient from '../services/NoteApiClient';

export const FETCH_MY_NOTES = 'FETCH_MY_NOTES';
export const CREATE_NOTE = 'CREATE_NOTE';

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


function createNoteSuccess(note) {
  return {
    type: CREATE_NOTE,
    payload: note,
  };
}

export function createNote() {
  return (dispatch) => {
    NoteApiClient.createNote().then((note) => {
      dispatch(createNoteSuccess(note));
    });
  };
}
