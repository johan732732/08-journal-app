import { authSlice, login } from '../../../src/store/auth/authSlice';
import { demoUser, initialState } from '../../fixtures/authFixtures';

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
});
