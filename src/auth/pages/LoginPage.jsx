import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import {
  Alert,
  Button,
  Grid2,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

const formData = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(startLoginWithEmailPassword(email, password));
  };

  const onGoogleSignIn = () => {
    console.log('Google sign in');
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid2 container>
          <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Email"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2 item size={{ xs: 12 }} xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="*****"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2
            item
            size={{ xs: 12 }}
            xs={12}
            sx={{ mt: 2 }}
            display={!!errorMessage ? '' : 'none'}
          >
            <Grid2 item size={{ xs: 12 }}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid2>
          </Grid2>

          <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                width="100%"
                fullWidth={true}
              >
                Login
              </Button>
            </Grid2>

            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2 container direction="row" justifyContent="end">
          <Typography sx={{ mr: 1 }}>Don't have an account?</Typography>
          <Link component={RouterLink} to="/auth/register" color="inherit">
            Register
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
