import NoteApiClient from '../services/NoteApiClient';

export const CREATE_STAR = 'CREATE_STAR';
export const DELETE_STAR = 'DELETE_STAR';

function createStarSuccess(noteId) {
  return {
    type: CREATE_STAR,
    payload: { noteId },
  };
}

export function createStar(noteId) {
  return (dispatch) => {
    NoteApiClient.createStar(noteId).then(() => {
      dispatch(createStarSuccess(noteId));
    });
  };
}


function deleteStarSuccess(noteId) {
  return {
    type: DELETE_STAR,
    payload: { noteId },
  };
}

export function deleteStar(noteId) {
  return (dispatch) => {
    NoteApiClient.deleteStar(noteId).then(() => {
      dispatch(deleteStarSuccess(noteId));
    });
  };
}
