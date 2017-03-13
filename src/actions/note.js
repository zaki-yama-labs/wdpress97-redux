import NoteApiClient from '../services/NoteApiClient';

export const FETCH_MY_NOTES = 'FETCH_MY_NOTES';
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

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

function updateNoteSuccess(note) {
  return {
    type: UPDATE_NOTE,
    payload: note,
  };
}

export function updateNote(id, { title, body }) {
  return (dispatch) => {
    NoteApiClient.updateNote(id, { title, body }).then(() => {
      dispatch(updateNoteSuccess({ id, title, body }));
    });
  };
}
