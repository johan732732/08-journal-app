import { TurnedInNot } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import {
  Box,
  Divider,
  Drawer,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

export const SlideBar = ({ drawerWidth = 240 }) => {
  const {displayName} = useSelector((state) => state.auth);

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            {displayName}
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {['January', 'February', 'March', 'April'].map(
            (text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>

                  <Grid2 container>
                    <ListItemText primary={text} />
                    <ListItemText
                      secondary={
                        'Ullamco esse proident anim tempor anim occaecat in Lorem consequat Lorem.'
                      }
                    />
                  </Grid2>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
};
