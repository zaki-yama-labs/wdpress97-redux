import { dispatch } from '../dispatcher';
import NoteApiClient from '../services/NoteApiClient';

export default {
  fetchMyNotes() {
    return NoteApiClient.fetchMyNotes().then(notes => {
      dispatch({ type: 'note/fetch/my', notes });
    });
  },

  fetchStarred() {
    return NoteApiClient.fetchStarredNotes().then(notes => {
      dispatch({ type: 'note/fetch/starred', notes });
    });
  },

  fetch(id) {
    dispatch({ type: 'note/fetch/before' });
    return NoteApiClient.fetchNote(id).then(note => {
      dispatch({ type: 'note/fetch', note });
    });
  },

  create() {
    return NoteApiClient.createNote().then(note => {
      dispatch({ type: 'note/create', note });
    });
  },

  update(id, { title, body }) {
    return NoteApiClient.updateNote(id, { title, body }).then(() => {
      dispatch({ type: 'note/update', id, note: { title, body } });
    });
  },

  delete(id) {
    return NoteApiClient.deleteNote(id).then(() => {
      dispatch({ type: 'note/delete', id });
    });
  },
};
