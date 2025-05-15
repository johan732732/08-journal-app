import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from '../../../src/store/auth/authSlice';
import {
  authenticatedState,
  demoUser,
  initialState,
} from '../../fixtures/authFixtures';

describe('Test on authSlice', () => {
  test('should return the initial state and be named "auth"', () => {
    expect(authSlice.name).toBe('auth');

    const state = authSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test('should perfom login action', () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual({
      status: 'authenticated',
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test('should perfom logout action without error message', () => {
    const state = authSlice.reducer(initialState, logout());

    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  test('should perfom logout action with error message', () => {
    const errorMessage = 'Invalid credentials';
    const state = authSlice.reducer(
      initialState,
      authSlice.actions.logout({ errorMessage })
    );
    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage,
    });
  });

  test('should perfom checkingCredentials action', () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());
    expect(state).toEqual({
      ...authenticatedState,
      status: 'checking',
    });
  });
});
