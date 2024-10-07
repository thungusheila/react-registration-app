// src/pages/LandingPage.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2c3e50', // Dark background for the landing page
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ecf0f1', // Light text color
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Typography variant="h2" gutterBottom align="center">
          Welcome to the Student Registration App
        </Typography>

        {/* Subheader */}
        <Typography variant="h6" paragraph align="center">
          Register students and view their details with ease.
        </Typography>

        {/* Button Group */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3, // Spacing between buttons
            marginTop: 4,
          }}
        >
          {/* Link to the Registration Page */}
          <Button
            component={Link}
            to="/register"
            variant="contained"
            color="primary"
            sx={{ fontSize: '16px' }}
          >
            Register Student
          </Button>

          {/* Link to the Registered Students List */}
          <Button
            component={Link}
            to="/register-list"
            variant="outlined"
            color="secondary"
            sx={{ fontSize: '16px', color: '#ecf0f1' }}
          >
            View Registered Students
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
