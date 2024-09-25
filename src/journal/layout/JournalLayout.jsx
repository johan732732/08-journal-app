import { Box } from '@mui/material';
import { NavBar, SlideBar } from '../components';

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box size={{ xs: 12 }}>
      <NavBar drawerWidth={drawerWidth} />

      <SlideBar drawerWidth={drawerWidth} />

      <Box component='main' sx={{ flexGrow: 1, padding: 3 }}>
        {/* Toolbar */}
        {children}
      </Box>
    </Box>
  );
};
