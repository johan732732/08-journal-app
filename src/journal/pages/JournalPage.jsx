import { AddOutlined, MailOutlineOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Eiusmod sit sunt adipisicing ut ipsum culpa amet anim. Consequat
        excepteur magna Lorem irure sint sunt anim nulla nulla dolore. Velit ut
        cupidatat aliquip ex ex nostrud commodo id ex magna ut. Voluptate
        aliquip occaecat in magna ea eu sint occaecat anim culpa consequat est
        nisi.
      </Typography> */}
      {/* <NoteView /> */}
      <NothingSelectedView />

      <IconButton
        size='large'
        color='primary'
        sx={{
          mt: 2,
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'absolute',
          bottom: 50,
          right: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
