export const initialState = {
  status: 'checking', // "checking", "authenticated", "not-authenticated"
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: 'authenticated', // "checking", "authenticated", "not-authenticated"
  uid: '123',
  email: 'demo@google.com',
  displayName: 'Demo User',
  photoURL: 'https://demo.com/photo.jpg',
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: 'not-authenticated', // "checking", "authenticated", "not-authenticated"
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: 'Invalid credentials',
};

export const demoUser = {
  uid: '123',
  email: 'demo@google.com',
  displayName: 'Demo User',
  photoURL: 'https://demo.com/photo.jpg',
};
