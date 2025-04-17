import { doc, collection, setDoc } from 'firebase/firestore/lite';
import { addNewEmptyNote, setActiveNote, setNotes, setSaving } from './journalSlice';
import { FirebaseDB } from '../../firebase/config';
import { loadNotes } from '../../helpers/loadNotes';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const newDoc = await doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!uid) throw new Error("The user's UID does not exist");

    const notes = await loadNotes(uid);

    dispatch(setNotes(notes));
  };
};
