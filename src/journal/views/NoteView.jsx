import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from '@mui/icons-material';
import {
  Button,
  Grid2,
  Icon,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useRef } from 'react';

import { useForm } from '../../hooks/useForm';
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from '../../store/journal';
import Swal from 'sweetalert2';

export const NoteView = () => {
  const dispatch = useDispatch();

  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Note updated', messageSaved, 'success');
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    const files = target.files;

    if (!files || files.length === 0) return;

    if (files.length > 3) {
      return Swal.fire(
        'Too many images',
        'You can only upload a maximum of 3 images',
        'error'
      );
    }

    if (!files[0].type.includes('image')) {
      return Swal.fire(
        'Invalid file type',
        'Only image files are allowed',
        'error'
      );
    }

    dispatch(startUploadingFiles(files));
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Grid2
      className="animate__animated animate__fadeIn animate__faster"
      container
      direaction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid2 item size={{ xs: 6 }}>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid2>

      <Grid2 size={{ xs: 6 }} display="flex" justifyContent="flex-end">
        <input
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          id="fileSelector"
          ref={fileInputRef}
          onChange={onFileInputChange}
        />
        <IconButton
          onClick={() => fileInputRef.current.click()}
          disabled={isSaving}
          variant="outlined"
          color="primary"
          component="span"
          sx={{ padding: 2, mr: 1 }}
        >
          <UploadOutlined sx={{ fontSize: 30, mr: 1 }} />
        </IconButton>

        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="primary"
          variant="outlined"
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} sx={{ mt: 2 }}>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Enter a title"
          label="Title"
          sx={{ border: 'none', mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid2>

      <Grid2 container justifyContent="flex-end" sx={{ width: '100%' }}>
        <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
          Delete
        </Button>
      </Grid2>

      <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
        <ImageGallery images={note.imageUrls} />
      </Grid2>
    </Grid2>
  );
};
