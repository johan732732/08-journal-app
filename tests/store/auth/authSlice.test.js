import { authSlice } from '../../../src/store/auth/authSlice';
import { initialState } from '../../fixtures/authFixtures';

describe('Test on authSlice', () => {
  test('should return the initial state and be named "auth"', () => {
    expect(authSlice.name).toBe('auth');

    const state = authSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
  });
});
