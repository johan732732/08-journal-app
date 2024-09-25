import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid2 container>
          <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type='email'
              placeholder='Email'
              fullWidth
            />
          </Grid2>

          <Grid2 item size={{ xs: 12 }} xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder='*****'
              fullWidth
            />
          </Grid2>

          <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Button variant='contained' width='100%' fullWidth={true}>
                Login
              </Button>
            </Grid2>

            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Button variant='contained' fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2 container direction='row' justifyContent='end'>
          <Typography sx={{ mr: 1 }}>Don't have an account?</Typography>
          <Link component={RouterLink} to='/auth/register' color='inherit'>
            Register
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
