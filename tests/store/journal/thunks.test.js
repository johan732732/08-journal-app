import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import {
  addNewEmptyNote,
  setActiveNote,
  setSaving,
} from '../../../src/store/journal/journalSlice';
import { startNewNote } from '../../../src/store/journal/thunks';
import { FirebaseDB } from '../../../src/firebase/config';

describe('Test on JournalThunks', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('startNewNote should create a new note and set it as active', async () => {
    const uid = 'TEST-UID';

    getState.mockReturnValue({
      auth: { uid: uid },
    });

    await startNewNote()(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith(setSaving());

    const newNote = {
      body: '',
      title: '',
      imageUrls: [],
      id: expect.any(String),
      date: expect.any(Number),
    };

    expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote(newNote));
    expect(dispatch).toHaveBeenCalledWith(setActiveNote(newNote));

    /** Delete all from Firebase */

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);
    const deletePromises = [];
    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));

    await Promise.all(deletePromises);
  });

  //     await startLogout()(dispatch);

  //     expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
  //     expect(dispatch).toHaveBeenCalledWith(logout());
  //   });
});
