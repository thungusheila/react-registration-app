// src/pages/RegisterList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './RegisterList.css'; // Import the CSS file

const RegisterList = () => {
  const navigate = useNavigate();
  const students = useSelector((state) => state.students); // Get students from Redux store

  return (
    <Box className="register-list-container">
      <Typography variant="h4" gutterBottom>
        Registered Students List
      </Typography>

      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Student ID</TableCell>
              <TableCell>Course of Study</TableCell>
              <TableCell>Level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.fullName}</TableCell>
                  <TableCell>{student.studentID}</TableCell>
                  <TableCell>{student.courseOfStudy}</TableCell>
                  <TableCell>{student.level}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="no-students-message">
                  No students registered yet
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Centered "Go Back to Landing Page" Button */}
      <Box className="button-container">
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          className="go-back-button" // Apply custom class for styling
        >
          Go Back to Landing Page
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterList;
