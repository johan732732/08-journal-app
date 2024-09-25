import { MailOutlineOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
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
      <NoteView />
      {/* <NothingSelectedView /> */}
    </JournalLayout>
  );
};
