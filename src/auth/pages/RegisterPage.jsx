import { Link as RouterLink } from 'react-router-dom';

import { Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid2 container>
          <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label='Name'
              type='text'
              placeholder='Full Name'
              fullWidth
            />
          </Grid2>

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
            <Grid2 item size={{ xs: 12 }}>
              <Button variant='contained' width='100%' fullWidth={true}>
                Create account
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2 container direction='row' justifyContent='end'>
          <Typography sx={{ mr: 1 }}>Do you have an account?</Typography>
          <Link component={RouterLink} to='/auth/login' color='inherit'>
            Login
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
