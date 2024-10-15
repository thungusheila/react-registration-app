// src/components/Sidebar.jsx
import React from 'react';
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  return (
    <Box className="sidebar">
      <Typography variant="h2" gutterBottom align="left">
        KUINN
      </Typography>
      <List>
        <ListItem button component={Link} to="/register" className="list-item">
          <ListItemText primary="Registration Form" />
        </ListItem>
        <ListItem button component={Link} to="/register-list" className="list-item">
          <ListItemText primary="Register List" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
