import { Box } from '@mui/material';
import { NavBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box size={{ xs: 12 }}>
      <NavBar drawerWidth={drawerWidth} />

      {/* Sidebar */}
      <Box component='main' sx={{ flexGrow: 1, padding: 3 }}>
        {/* Toolbar */}
        {children}
      </Box>
    </Box>
  );
};
