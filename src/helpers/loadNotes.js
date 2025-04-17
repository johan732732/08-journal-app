import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadNotes = async (uid = '') => {
  if (!uid) throw new Error("The user's UID does not exist");

  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
  const notes = await getDocs(collectionRef).then((snapshot) =>
    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  );

  return notes;
};
