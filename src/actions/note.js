import NoteApiClient from '../services/NoteApiClient';

export const FETCH_MY_NOTES = 'FETCH_MY_NOTES';
export const FETCH_NOTE_START = 'FETCH_NOTE_START';
export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS';
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

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

function fetchNoteStart() {
  return {
    type: FETCH_NOTE_START,
  };
}

function fetchNoteSuccess(note) {
  return {
    type: FETCH_NOTE_SUCCESS,
    payload: note,
  };
}

export function fetchNote(id) {
  return (dispatch) => {
    dispatch(fetchNoteStart());
    NoteApiClient.fetchNote(id).then((note) => {
      dispatch(fetchNoteSuccess(note));
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

function deleteNoteSuccess(id) {
  return {
    type: DELETE_NOTE,
    payload: { id },
  };
}

export function deleteNote(id) {
  return (dispatch) => {
    NoteApiClient.deleteNote(id).then(() => {
      dispatch(deleteNoteSuccess(id));
    });
  };
}
