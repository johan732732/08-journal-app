import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid2, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Grid2
      container
      direaction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid2 item size={{ xs: 6 }}>
        <Typography fontSize={39} fontWeight='light'>
          September 25 2024
        </Typography>
      </Grid2>

      <Grid2 size={{ xs: 6 }} display='flex' justifyContent='flex-end'>
        <Button color='primary' variant='outlined' sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} sx={{ mt: 2 }}>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Enter a title'
          label='Title'
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='What happened today?'
          minRows={5}
        />
      </Grid2>

      <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
        <ImageGallery />
      </Grid2>
    </Grid2>
  );
};
