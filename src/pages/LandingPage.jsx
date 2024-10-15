// src/pages/LandingPage.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file

const LandingPage = () => {
  return (
    <Box className="landing-page">
      <Container maxWidth="md" className="container">
        {/* Header */}
        <Typography variant="h2" gutterBottom align="center">
          Welcome to the Student Registration App
        </Typography>

        {/* Subheader */}
        <Typography variant="h6" paragraph align="center">
          Register students and view their details with ease.
        </Typography>

        {/* Button Group */}
        <Box className="button-group">
          {/* Link to the Registration Page */}
          <Button
            component={Link}
            to="/register"
            variant="contained"
           
          >
            Register Student
          </Button>

          {/* Link to the Registered Students List */}
          <Button
            component={Link}
            to="/register-list"
           color="primary" variant="contained"
          >
            View Registered Students
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
