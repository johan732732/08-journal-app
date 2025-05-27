import { loginWithEmailPassword, signInWithGoogle } from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth';
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from '../../../src/store/auth/thunks';
import { demoUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/firebase/providers');

describe('Test on AuthThunks', () => {
  const dispatch = jest.fn();

  test('Should call checkingCredentials method | checkingAuthentication', async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test('Should call checkingCredentials and login methods | startGoogleSignIn', async () => {
    const loginData = { ok: true, ...demoUser };
    await signInWithGoogle.mockResolvedValue(loginData);

    //thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('Should call checkingCredentials and logout methods | startGoogleSignIn', async () => {
    const loginData = { ok: false, errorMessage: 'An error occurred' };
    await signInWithGoogle.mockResolvedValue(loginData);

    //thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });

  test('StartLoginWithEmailPassword should call checkingCredentials and login methods - success', async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: '123456' };

    await loginWithEmailPassword.mockResolvedValue(loginData);

    await startLoginWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });
});
