// src/components/Sidebar.jsx
import React from 'react';
import { Typography,List, ListItem, ListItemText, Drawer, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        
      <Typography variant="h2" gutterBottom align="left">
          KUINN
        </Typography>
        <List>
       
          <ListItem button component={Link} to="/register">
            <ListItemText primary="Registration Form" />
          </ListItem>
          <ListItem button component={Link} to="/register-list">
            <ListItemText primary="Register List" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
