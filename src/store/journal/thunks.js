import { doc, collection, setDoc } from 'firebase/firestore/lite';
import { addNewEmptyNote, setActiveNote, setSaving } from './journalSlice';
import { FirebaseDB } from '../../firebase/config';

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
